import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Login = ({ handleSwitchLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

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
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL;
          //   navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control p-3"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control p-3"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 p-3 fs-5 mb-4">
          Login
        </button>
      </form>
      <p className="text-center text-muted small">
        Don't have an account? <Link onClick={handleSwitchLogin}>Signup</Link>
      </p>
    </>
  );
};
