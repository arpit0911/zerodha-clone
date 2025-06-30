import React from "react";

export const Hero = () => {
  return (
    <div className="container p-5 mt-5 text-center border-bottom">
      <h1>Zerodha Products</h1>
      <h3 className="mt-3 mb-4 fs-4 text-muted">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="mb-5 pb-5">
        Check out our
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings&nbsp;
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
};
