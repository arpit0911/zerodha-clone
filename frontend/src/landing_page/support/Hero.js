import React from "react";

export const Hero = () => {
  return (
    <div
      className="container-fluid text-light p-5"
      style={{ backgroundColor: "#387ED1" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3 className="fs-4 fw-bold mb-5">Support Portal </h3>
          <div>
            <a
              className="text-decoration-none text-light pb-1 border-bottom border-white fw-bold fs-6"
              href="/"
            >
              Track tickets
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="pe-5">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="input-group">
              <input
                type="text"
                id="search-control"
                className="form-control border-end-0 p-3 rounded-0"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              />
              <span className="input-group-text bg-white border-start-0 rounded-0">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <div className="d-flex my-3 flex-wrap">
              <a
                href="/"
                class="fw-bold text-white border-bottom border-white pb-1 text-decoration-none me-3 mb-3"
              >
                Track account opening
              </a>
              <a
                href="/"
                class="fw-bold text-white border-bottom border-white pb-1 text-decoration-none me-3 mb-3"
              >
                Track segment activation
              </a>

              <a
                href="/"
                class="fw-bold text-white border-bottom border-white pb-1 text-decoration-none me-3 mb-3"
              >
                Intraday margins
              </a>

              <a
                href="/"
                class="fw-bold text-white border-bottom border-white pb-1 text-decoration-none me-3 mb-3 "
              >
                Kite user manual
              </a>
            </div>
          </div>
          <div className="px-5">
            <h4 className=" fw-bold">Featured</h4>
            <ol>
              <li className="mb-3 fw-bold">
                <a
                  className="text-light text-decoration-underline pe-5 me-5"
                  href="/"
                >
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li className="fw-bold">
                <a
                  className="text-light text-decoration-underline  pe-5 me-5"
                  href="/"
                >
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
