import React, { Component } from "react";
import "../../style/HomeSection3.css";
import robot from "../../assets/mobile/section3/robot.webp";
import robot1 from "../../assets/mobile/section3/robot1.webp";

class MobileHomeSection3 extends Component {
  render() {
    return (
      <section className="section-3">
        <div className="container-1">
          <div className="header">Cameras</div>
          <div className="context">
            Think you know iPad cameras? Think deeper.
          </div>
          <img src={robot} alt="robot" />
        </div>
        <div className="container-2">
          <div className="header">Pro cameras</div>
          <div className="context">
            Advanced cameras combined with a large display, fast performance and
            highly calibrated sensors have always made iPad uniquely capable.
            The Wide and new Ultra Wide cameras help you frame the perfect photo
            or video. And combined with studio‑quality mics and four speaker
            audio, you can even set up a multi‑camera filmmaking rig.
          </div>
          <img src={robot1} alt="robot" />
        </div>
        <div className="container-3">
          <div className="header">LiDAR Scanner</div>
          <div className="context">
            LiDAR (Light Detection and Ranging) is used to determine distance by
            measuring how long it takes light to reach an object and reflect
            back. It is so advanced, it’s being developed by NASA for Mars
            landing missions. And it’s now been engineered to fit in the thin
            and light iPad Pro.
            <br />
            <br />
            The custom-designed LiDAR Scanner uses direct time-of-flight to
            measure reflected light from up to 5 metres away, both indoors and
            out. It works down at the photon level, operates at nanosecond
            speeds and opens up tremendous possibilities for augmented reality
            and beyond.
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection3;
