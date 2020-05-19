import React, { Component } from "react";
import "../Style/navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="menu">
            <div>
              <img src={require("@images/logo.png")} alt="logo" />
            </div>
            <div>Home</div>
            <div>Services</div>
            <div>Portofolio</div>
            <div>Journal</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
