import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("auth provider", user);
  // Function to log in
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3002/auth/login", {
        email,
        password,
      });
      setUser(response.data.user);
      // Store the token (e.g., in localStorage or a cookie)
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      console.error("Login failed:", error);
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
    login,
    logout,
  };

  // Render the provider with the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
