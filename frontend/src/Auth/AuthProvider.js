import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log("auth provider", user);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

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
      const { success, message, user } = data;
      if (success) {
        handleSuccess(message);
        setUser(user);
        setTimeout(() => {
          // window.location.href = process.env.REACT_APP_DASHBOARD_URL;
          navigate("/support");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      throw error;
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
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // console.log("success->", message);
        setTimeout(() => {
          //   window.location.href = process.env.REACT_APP_DASHBOARD_URL;
          navigate("/about");
        }, 1000);
      } else {
        handleError(message);
        console.log("error->", message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  // Check for an existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // You can add logic here to verify the token with your backend
      // For now, we'll assume a valid token means the user is logged in
      setUser({ token });
    }
    setLoading(false);
  }, []);

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
      {!loading && children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
