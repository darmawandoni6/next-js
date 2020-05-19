import React, { Component } from "react";
import Navbar from "@components/Navbar";
import Slide from "@components/Slide";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slide />
      </div>
    );
  }
}

export default Landing;
