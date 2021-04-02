import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import "../../style/HomeSection2.css";

class Container1 extends Component {
  section2Container1 = createRef();

  componentDidMount() {
    // animation for section 2's container-1
    TweenMax.to(this.section2Container1.current, {
      duration: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=2000px center",
        end: "top+=2000px center",
        toggleActions: "play none none reverse",
        // scrub: true,
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
