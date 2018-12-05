// Context API || Global State
import React, { Component } from "react";
import axios from "axios";

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
    case "ADD_CONTACT":
      return {
        // return an object and initial state
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

// This file now holds our Application State
export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // Refactor, neater syntax
  // Adding async/await to axios
  // assign a variable to the response and the do what we want
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({
      contacts: res.data
    });
  }

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => this.setState({ contacts: res.data }));
  // }

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

// axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
//       this.setState({
//         contacts: res.data.map(i => {
//           return {
//             id: i.id,
//             name: i.name,
//             address: `${i.address.suite} ${i.address.street}`,
//             email: i.email
//           };
//         })
//       })
//     );
