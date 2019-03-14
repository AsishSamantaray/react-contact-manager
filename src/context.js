import React, { Component } from "react";
// import Contact from "./components/Contact";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Asish Samantaray",
        email: "samantaray.asish04@gmail.com",
        phone: 9078465354
      },
      {
        id: 2,
        name: "Abhisekh Samantaray",
        email: "abhisekh.indravati@gmail.com",
        phone: 9438000050
      },
      {
        id: 3,
        name: "Anshuman",
        email: "anshuman.arun@gmail.com",
        phone: 57589393623
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
