// rcc Class Component
import React, { Component } from "react";
import Contact from "./Contact";
// Any component we want to use the Context 'state' with we bring in the Consumer
import { Consumer } from "../Context";

class Contacts extends Component {
  // constructor() {
  // super b/c Contacts is an ext. of Contact 'parent/child'
  // super();
  // this.state = {

  deleteContact = id => {
    // takes contacts from state
    const { contacts } = this.state;
    // use to filter to call 'new' state and filter out deleted state
    const newContacts = contacts.filter(contact => contact.id !== id);
    // set the new state
    this.setState({
      contacts: newContacts
    });
  };

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
              {/* contact is getting passed as props to Contact.js */}
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // binding params to the function to use
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
