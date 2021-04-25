import React, { Component, createRef } from "react";
import robot from "../assets/robot.mp4";
import { ScrollMagic } from "scrollmagic";
import "../style/RobotAnimation.css";

class test extends Component {
  introRef = createRef();
  videoRef = createRef();

  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      duration: 5000,
      triggerElement: this.introRef.current,
      triggerHook: 0,
    })
      .addIndicators()
      .setPin(this.introRef.current)
      .addTo(controller);

    let accelamount = 0.1;
    let scrollPos = 0;
    let delay = 0;

    scene.on("update", (e) => {
      scrollPos = e.scrollPos;
      console.log(e);
    });
  }

  render() {
    return (
      <div className="intro" ref={this.introRef}>
        <video src={robot} ref={this.videoRef}></video>
      </div>
    );
  }
}

export default test;
