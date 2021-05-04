import React, { Component, createRef } from "react";
import gsap from "gsap";
import "../style/HomeSection3.css";

class HomeSection3 extends Component {
  container2 = createRef();
  container3 = createRef();
  backgroundRef = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1, section2 } = heights;
    const newHeight = section1 + section2;

    gsap.fromTo(
      this.container2.current,
      { opacity: 0 },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start:
            viewType === "desktop"
              ? `top+=${newHeight - 200} center`
              : `top+=${newHeight - 300} center`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.container3.current,
      { opacity: 0 },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start:
            viewType === "desktop"
              ? `top+=${newHeight + 500} center`
              : `top+=${newHeight + 300} center`,
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    return (
      <section className="section-3">
        <div className="container-1">
          <div className="header">Cameras</div>
          <div className="context">
            Think you know iPad cameras? Think deeper.
          </div>
        </div>
        <div className="container-2" ref={this.container2}>
          <div className="header">Pro cameras</div>
          <div className="context">
            Advanced cameras combined with a large display, fast performance and
            highly calibrated sensors have always made iPad uniquely capable.
            The Wide and new Ultra Wide cameras help you frame the perfect photo
            or video. And combined with studio‑quality mics and four speaker
            audio, you can even set up a multi‑camera filmmaking rig.
          </div>
        </div>
        <div className="container-3" ref={this.container3}>
          <div className="header">
            LiDAR <br />
            Scanner
          </div>
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

export default HomeSection3;
