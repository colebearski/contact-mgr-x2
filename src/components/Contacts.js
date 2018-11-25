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
    // test
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {/* contact is getting passed as props to Contact.js */}
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
