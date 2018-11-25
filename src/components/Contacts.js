// rcc Class Component
import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // constructor() {
  // super b/c Contacts is an ext. of Contact 'parent/child'
  // super();
  // this.state = {
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
    // };
  };

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

  render() {
    const { contacts } = this.state;
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
  }
}

export default Contacts;
