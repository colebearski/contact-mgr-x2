// rcc Class Component
import React, { Component } from "react";
import Contact from "./Contact";
// Any component we want to use the Context 'state' with we bring in the Consumer
import { Consumer } from "../../Context";

class Contacts extends Component {
  // Return the Consumer tag with the Value passed early, which was the entire State
  render() {
    return (
      <Consumer>
        {value => {
          // DESTRUCTURING
          // PUlled out Contacts from the Context state
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {/* contact is getting passed as props to Contact.js */}
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
