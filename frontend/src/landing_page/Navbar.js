import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <style>
        {`
          .navbar-nav .nav-link.active,
          .navbar-nav .nav-link.active:hover {
            color: #3F9BE5 !important;
          }
          .profile-icon {
            width: 40px;
            height: 40px;
            background-color: #e0e7ff; /* Light blue background */
            color: #4a5568; /* Dark text color */
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%; /* Make it a circle */
            margin-right: 8px;
        }
        .dropdown-menu {
            min-width: 250px;
        }
        `}
        <style></style>
      </style>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <NavLink className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!user && (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/products"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/support"
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          {user && (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="profile-icon">
                      {user?.slice(0, 1)?.toUpperCase() || "U"}
                    </div>
                    <span className="d-none d-md-inline text-capitalize">
                      {user?.split(" ")?.[0] || "User"}
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <h6 className="dropdown-header text-capitalize fw-bold">
                        {user}
                      </h6>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i
                          class="fa fa-question-circle me-2"
                          aria-hidden="true"
                        ></i>
                        Need help?
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" onClick={() => logout()}>
                        <i class="fa fa-sign-out me-2" aria-hidden="true"></i>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
