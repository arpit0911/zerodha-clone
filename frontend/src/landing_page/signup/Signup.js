import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate passwords when the user clicks away from either password field
  const handlePasswordBlur = () => {
    // Only show an error if the user has typed in the confirm password field
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      handleError("Passwords do not match.");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup",
        {
          // Only send necessary data to the backend
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // window.location.href = "http://localhost:3001";
          navigate("/");
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
      username: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center" style={{ marginTop: "6rem" }}>
        Open a free demat and trading account online
      </h2>
      <p className="text-center text-muted mb-4 mt-4 fs-4">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="row p-5 align-items-center justify-content-between">
        <div className="col-md-6 d-none d-md-block text-center ">
          <img
            src="/media/images/signup.png"
            alt="Signup"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 p-md-5 my-auto">
          <h1 className="mb-3 display-4">Invest in everything</h1>
          <p className="text-muted mb-4 lead">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more.
          </p>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                className="form-control p-3"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
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
                onBlur={handlePasswordBlur}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                className="form-control p-3"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handlePasswordBlur}
                required
              />
            </div>
            {passwordError && (
              <p className="text-danger small mt-n2 mb-3">{passwordError}</p>
            )}
            <button
              type="submit"
              className="btn btn-primary w-100 p-3 fs-5 mb-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-muted small">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="text-center text-muted small">
            Want to open an NRI account? <Link to="/">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
