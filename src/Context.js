// Context API || Global State
import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  // Evaluate action type that gets called
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // Filters out the ID which is sent thru the payload
        // ... means.. gather the remaining parameteres into an array
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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
