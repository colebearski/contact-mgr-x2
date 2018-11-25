// rcc Class Based Component
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/contact.css";

class Contact extends Component {
  render() {
    // DESTRUCTURING
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Proptypes
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
