import React from "react";

export const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-7">
          <img src={imageURL} alt={productName} style={{ width: "75%" }} />
        </div>
        <div className="col-5 py-5 ps-5">
          <h2 className="fs-2">{productName}</h2>
          <p className="fs-6">{productDescription}</p>
          <div className="mb-4">
            <a className="me-5 text-decoration-none" href={tryDemo}>
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="me-5 text-decoration-none" href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a className="me-3 text-decoration-none" href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="google play"
              ></img>
            </a>
            <a className=" text-decoration-none" href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="app store"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
