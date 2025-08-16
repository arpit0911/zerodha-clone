import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Auth/AuthProvider";

export const Login = ({ handleSwitchLogin }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    login(email, password);
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
