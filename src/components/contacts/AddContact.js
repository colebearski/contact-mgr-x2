import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  // Updates state for form values
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Form Submit func
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  // Next create an action, that goes to the context reducer, 'like delete', and then add it to the state

  render() {
    // Destructuring
    // so we don't have to call value={this.state.name}..
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          // Destructure
          // Now we have access to dispatch, which allows us to call an action, call Add Contact
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
