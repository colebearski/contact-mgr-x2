// rfc Functional Component
import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  // DESTRUCTURING
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
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
