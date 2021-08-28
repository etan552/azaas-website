import React, { Component } from "react";
import cloudGif from "../../assets/mobile/section6/cloud.webm";
import robot from "../../assets/mobile/section6/robot.webp";

class MobileHomeSection6 extends Component {
  render() {
    return (
      <section className="section-6">
        <video className="cloud-computing" autoPlay loop muted>
          <source src={cloudGif} type="video/webm" />
        </video>
        <div className="container-1">
          <div className="header">Magic Keyboard</div>
          <div className="context">Yes, it floats.</div>
        </div>
        <img src={robot} alt="Robot" className="robot" />
        <div className="container-2">
          <div className="header">Magic Keyboard</div>
          <div className="context">
            The all-new Magic Keyboard is an amazing companion for iPad Pro.2 It
            features the best typing experience ever on iPad, a trackpad that
            opens up new ways to work with iPadOS, a USB‑C port for pass-through
            charging, and front and back protection. And it features a floating
            cantilever design, allowing you to attach iPad Pro magnetically, and
            smoothly adjust it to the perfect viewing angle for you.
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection6;
