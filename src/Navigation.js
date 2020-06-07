import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div className="container">
          <a href="#" className="navbar-brand mr-3">
            Interior Decors
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="navbarCollapse">
            <div className="navbar">
              <a href="#" className="nav-item nav-link active">
                Home
              </a>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <a href="#" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
