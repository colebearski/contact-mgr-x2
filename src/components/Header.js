// rfc Functional Component
import React from "react";

const Header = props => {
  // DESTRUCTURING
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;
