// rfc Functional Component
import React from "react";
import PropTypes from "prop-types";
// CSS
import "./css/header.css";

const Header = props => {
  // DESTRUCTURING
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default Props
Header.defaultProps = {
  branding: "My App"
};

// Proptypes
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
