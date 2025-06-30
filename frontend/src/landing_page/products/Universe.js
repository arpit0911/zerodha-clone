import React from "react";

export const Universe = () => {
  return (
    <div className="container mt-5 pt-5 text-center">
      <div className="text-center mb-5">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row m-5 px-5 align-items-center">
        <div className="col-4">
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="\media\images\zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="\media\images\streakLogo.png"
              alt="streakLogo"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="media\images\sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
          </div>
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="\media\images\smallcaseLogo.png"
              alt="smallcaseLogo"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="\media\images\goldenpiLogo.png"
              alt="goldenpiLogo"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Bonds trading platform.
              </p>
            </div>
          </div>
          <div className="card border-0 p-4 align-items-center text-center">
            <img
              src="\media\images\dittoLogo.png"
              alt="dittoLogo"
              style={{ width: "50%" }}
            />
            <div className="card-body">
              <p className="card-text" style={{ fontSize: ".8rem" }}>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary p-3 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
};
