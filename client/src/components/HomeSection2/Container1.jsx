import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import "../../style/HomeSection2.css";

class Container1 extends Component {
  section2Container1 = createRef();

  componentDidMount() {
    const { homeRef, heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;
    let isDesktop = viewType === "desktop" ? true : false;

    // animation for section 2's container-1
    TweenMax.to(this.section2Container1.current, {
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: homeRef,
        start: isDesktop
          ? `top+=${newHeight + 254} top`
          : `top+=${newHeight + 54} top`, // 1146
        toggleActions: "play none none reverse",
      },
    });
  }
  render() {
    return (
      <div className="container-1" ref={this.section2Container1}>
        <h1 className="header">Liquid Retina display</h1>
        <div className="context">
          Try to find a more
          <br /> advanced mobile display.
          <br />
          We'll wait.
        </div>
      </div>
    );
  }
}

export default Container1;
