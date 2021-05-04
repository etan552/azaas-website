import React, { Component, createRef } from "react";
import gsap from "gsap";
import "../style/Background.css";

class Background extends Component {
  backgroundRef = createRef();

  componentDidUpdate() {
    const { homeRef, heights } = this.props;
    const { section1, section2 } = heights;
    const newHeight = section1 + section2;
  }

  render() {
    return <div className="background"></div>;
  }
}

export default Background;
