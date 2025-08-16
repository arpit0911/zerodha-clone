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
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleInfo = (msg) => {
    toast.info(msg, {
      position: "top-right",
    });
  };

  const signUp = async ({ username, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      handleError("Passwords do not match.");
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
        {
          // Only send necessary data to the backend
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      const { success, message, user: signedUpUser } = data;
      if (success) {
        handleSuccess(message);
        setUser(signedUpUser?.username);
        setTimeout(() => {
          // window.location.href = process.env.REACT_APP_DASHBOARD_URL;
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError(
        error.response?.data?.message || "An error occurred during sign up."
      );
    }
  };

  // Function to log in
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          // Only send necessary data to the backend
          email,
          password,
        },
        { withCredentials: true }
      );
      const { success, message, user: loggedInUser } = data;
      if (success) {
        handleSuccess(message);
        setUser(loggedInUser); // Set user state immediately on login
        setTimeout(() => {
          //   window.location.href = process.env.REACT_APP_DASHBOARD_URL;
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
        console.log("error->", message);
      }
    } catch (error) {
      console.log(error);
      handleError(
        error.response?.data?.message || "An error occurred during login."
      );
    }
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
            handleInfo(`Welcome back, ${verifiedUser}!`);
          } else {
            // Token is invalid or expired
            removeCookie("token");
            setUser(null);
          }
        } catch (error) {
          console.error("Verification failed:", error);
          removeCookie("token");
          setUser(null);
        }
      }
      setLoading(false); // Set loading to false after verification attempt
    };

    verifyUser();
  }, [cookies.token, removeCookie]);

  // The value object to be provided to consumers
  const value = {
    user,
    loading,
    signUp,
    login,
    logout,
  };

  // Render the provider with the value
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}{" "}
      {/* Show a loading indicator */}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
