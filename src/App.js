import React, { Component } from "react";
// COMPONENTS
import Contact from "./components/Contact";
import Header from "./components/Header";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manger" />
        <div className="container">
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
      </div>
    );
  }
}

export default App;
