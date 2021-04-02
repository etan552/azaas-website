import React, { Component, createRef } from "react";
import spinningRobot from "../assets/animation1.gif";
import "../style/HomeSection1.css";

class HomeSection1 extends Component {
  render() {
    const { section1Ref } = this.props;
    return (
      <section className="section-1" ref={section1Ref}>
        <img src={spinningRobot} alt="Robot" />

        <div>
          <h1 className="header">Your next computer is not a computer.</h1>
          <div className="context">
            It’s a magical piece of glass.
            <br />
            It’s so fast most PC laptops can’t catch up.
            <br />
            It has pro cameras that can transform reality.
            <br />
            And you can use it with touch, pencil, keyboard and now trackpad.
            <br />
            It’s the new iPad Pro.
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection1;
