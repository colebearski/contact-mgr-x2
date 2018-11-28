import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  // Updates state for form values
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Form Submit func
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // Next create an action, that goes to the context reducer, 'like delete', and then add it to the state

  render() {
    // Destructuring
    // so we don't have to call value={this.state.name}..
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
          </form>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </div>
      </div>
    );
  }
}

export default AddContact;
