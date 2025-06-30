import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5 text-center">
        <h1>Charges</h1>
        <p className="text-muted mt-2 mb-5 pb-5">
          List of all charges and taxes
        </p>
        <div className="col-4 mt-5 pt-5 text-center">
          <img
            src="\media\images\pricing0.svg"
            alt="pricing0"
            style={{ width: "65%" }}
          />
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="p-3 mx-2 text-muted" style={{ fontSize: "0.9rem" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 pt-5 text-center">
          <img
            src="\media\images\intradayTrades.svg"
            alt="intradayTrades"
            style={{ width: "65%" }}
          />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="p-3 mx-2 text-muted" style={{ fontSize: "0.9rem" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5 pt-5 text-center">
          <img
            src="\media\images\pricing0.svg"
            alt="pricing0"
            style={{ width: "65%" }}
          />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="p-3 mx-2 text-muted" style={{ fontSize: "0.9rem" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};
