import React, { Component, createRef } from "react";
import spinningRobot from "../assets/animation1.webp";
import { Link } from "react-router-dom";
import "../style/HomeSection1.css";

class HomeSection1 extends Component {
  constructor(props) {
    super(props);

    this.gif = spinningRobot;
    this.imgRef = createRef();
  }

  render() {
    console.log(this.imgRef.current);
    if (this.imgRef.current) this.imgRef.current.src = this.gif;
    // const { section1Ref } = this.props;
    return (
      <section className="section-1">
        <img
          src={this.gif}
          alt="Robot"
          className="robot-img"
          ref={this.imgRef}
        />
        <div>
          <h1 className="header">Don't make them think.</h1>
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

          <Link to="#" className="link">
            Watch the film
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeSection1;
