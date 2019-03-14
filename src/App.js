import React, { Component } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <div>
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
