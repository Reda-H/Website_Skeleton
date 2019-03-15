import React, { Component } from 'react';
import Header from "./Components/HeaderComponents/header";
import Body from "./Components/BodyComponents/body";
import "./Assets/page_design.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
