import React, { Component } from 'react';
import Box from "./Boxes/box";

class Body extends Component {

  render() {
    return (
      <div className="Body">
        <h1>Body Elements</h1>
          <Box />
          <Box />
          <Box />
      </div>
    );
  }
}

export default Body;
