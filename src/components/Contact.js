// rcc Class Based Component
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/contact.css";

class Contact extends Component {
  render() {
    // DESTRUCTURING
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Proptypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
