import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center" style={{ marginTop: "6rem" }}>
        Open a free demat and trading account online
      </h2>
      <p className="text-center text-muted mb-5 mt-4 fs-4">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="row p-5">
        <div className="col-md-6 d-none d-md-block text-center">
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
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Enter your 10-digit mobile number"
              maxLength="10"
            />
          </div>
          <button className="btn btn-primary w-100 p-3 fs-5 mb-4">
            Continue
          </button>
          <p className="text-center text-muted small">
            Want to open an NRI account? <Link to="/">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
