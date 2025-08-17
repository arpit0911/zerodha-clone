import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, removeCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleInfo = (msg) => {
    toast.info(msg, {
      position: "bottom-right",
    });
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    // localStorage.removeItem("authToken");
    removeCookie("token");
    navigate("/");
  };

  // Check for an existing token on app load
  useEffect(() => {
    setLoading(true);
    const verifyUser = async () => {
      if (cookies.token) {
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth`,
            {},
            { withCredentials: true }
          );
          const { status, user: verifiedUser } = data;
          if (status) {
            setUser(verifiedUser);
            // handleInfo(`Welcome back, ${verifiedUser}!`);
          } else {
            // Token is invalid or expired
            removeCookie("token");
            setUser(null);
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
          }
        } catch (error) {
          console.error("Verification failed:", error);
          removeCookie("token");
          setUser(null);
        }
      } else {
        // console.log("no token", process.env.REACT_APP_FRONTEND_URL);
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
      }
      setLoading(false); // Set loading to false after verification attempt
    };

    verifyUser();
  }, [cookies.token, removeCookie]);

  // The value object to be provided to consumers
  const value = {
    user,
    loading,
    logout,
  };

  // Render the provider with the value
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}
      {/* Show a loading indicator */}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
