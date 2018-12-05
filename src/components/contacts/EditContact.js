import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    // get the id
    // get id from parameter this.props.match.params
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    // response data
    const contact = res.data;

    // set the state
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  // Updates state for form values
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Form Submit func
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // Redirect
    this.props.history.push("/");
  };

  // Next create an action, that goes to the context reducer, 'like delete', and then add it to the state

  render() {
    // Destructuring
    // so we don't have to call value={this.state.name}..
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          // Destructure
          // Now we have access to dispatch, which allows us to call an action, call Add Contact
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Update Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    // if anything is in errors.name it will get passed here
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;