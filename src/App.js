import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manger" />
        <Contact
          name="Bradley Beal"
          email="bbgun@gmail.com"
          phone="444-444-4444"
        />
        <Contact
          name="JK Rowling"
          email="jkRowl@gmail.com"
          phone="555-555-5555"
        />
        <Contact
          name="Tyrion Lanister"
          email="kingofthenorth@gmail.com"
          phone="777-777-7777"
        />
      </div>
    );
  }
}

export default App;
