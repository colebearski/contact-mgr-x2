// rcc Class Based Component
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Custom Methods should use arrow functions for 'this'
  // eliminates the need to bind or run constructors
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    // DESTRUCTURING
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {/* {this.onshowClick} BECAUSE IT'S A METHOD INSIDE THIS CLASS */}
          {/* you can bind additional parameters to the function  */}
          {/* this.onShowClick.bind(this, name, etc..) */}
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// Proptypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
