// Context API || Global State
import React, { Component } from "react";

const Context = React.createContext();

// This file now holds our Application State
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Henry Ford",
        email: "mustang@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: 2,
        name: "Bill Gates",
        email: "microsoft@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 3,
        name: "Elon Musk",
        email: "tesla@gmail.com",
        phone: "777-777-7777"
      }
    ]
  };

  // This Provider gives off a Value holding the State
  // value can take pieces of state, but we passed the entire State
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
