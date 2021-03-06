// rcc Class Based Component
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import "./../css/contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Custom Methods should use arrow functions for 'this'
  // eliminates the need to bind or run constructors
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  // onDeleteClick = (id, dispatch) => {
  //   // Delete request to fake rest api
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  // };

  render() {
    // DESTRUCTURING
    const { contact } = this.props;
    // const { id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          // DESTRUCTURE
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {/* {this.onshowClick} BECAUSE IT'S A METHOD INSIDE THIS CLASS */}
                {/* you can bind additional parameters to the function  */}
                {/* this.onShowClick.bind(this, name, etc..) */}
                {contact.name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="showBtn fas fa-sort-down"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                  className="deleteBtn fas fa-times"
                />
                <Link to={`contact/edit/${this.props.contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Proptypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
