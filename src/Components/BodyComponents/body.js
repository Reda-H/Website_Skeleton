import React, { Component } from 'react';
import Box from "./Boxes/box";
import AddBoxButton from "./AddBoxes/addboxbutton";

class Body extends Component {

  render() {
    return (
      <div className="Body">
        <h1>Body Elements</h1>
          <Box />
          <Box />
          <Box />
          <AddBoxButton />
      </div>
    );
  }
}

export default Body;
