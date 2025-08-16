import React from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          className="img-fluid mb-5"
          alt="Hero"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        {!user && (
          <button
            className="btn btn-primary p-3 fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={() => navigate("/signup")}
          >
            Signup Now
          </button>
        )}
      </div>
    </div>
  );
};
