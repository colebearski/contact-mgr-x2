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

  onDeleteClick = e => {
    console.log("clicked");
  };

  render() {
    // DESTRUCTURING
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {/* {this.onshowClick} BECAUSE IT'S A METHOD INSIDE THIS CLASS */}
          {/* you can bind additional parameters to the function  */}
          {/* this.onShowClick.bind(this, name, etc..) */}
          {contact.name}{" "}
          <i onClick={this.onShowClick} className="showBtn fas fa-sort-down" />
          <i onClick={this.onDeleteClick} className="deleteBtn fas fa-times" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone: {contact.phone}</li>
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
