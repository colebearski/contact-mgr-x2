import React, { Component } from "react";
// COMPONENTS
import Contacts from "./components/Contacts";
import Header from "./components/Header";
// Imported our Provider State
import { Provider } from "./Context";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      // Wrapped the entire application in the Provider State so we can access
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
