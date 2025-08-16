import React from "react";

export const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-5 pe-5">
          <h2 className="fs-2">{productName}</h2>
          <p className="fs-6">{productDescription}</p>
          <div className="mb-4">
            <a className="me-5 text-decoration-none" href={learnMore}>
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 d-flex justify-content-end">
          <img src={imageURL} alt={productName} style={{ width: "75%" }} />
        </div>
      </div>
    </div>
  );
};
