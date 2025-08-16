import React from "react";

export const Team = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1>People</h1>
      </div>
      <div className="row p-5 mt-5">
        <div className="col text-center">
          <img
            src="/media/images/profile.jpg"
            alt="Arpit Singh"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "60%", height: "60%", objectFit: "cover" }}
          />
          <p>Arpit Singh</p>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            Founder & CEO
          </p>
        </div>
        <div className="col">
          <p>
            Arpit bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="/" className="text-decoration-none">
              &nbsp;Homepage&nbsp;
            </a>
            /
            <a href="/" className="text-decoration-none">
              &nbsp;TradingQnA&nbsp;
            </a>
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
