import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";

import "../../style/HomeSection2.css";

class Container3 extends Component {
  section2Container3 = createRef();

  componentDidMount() {
    // animation for section 2' container-3 fade in
    TweenMax.to(this.section2Container3.current, {
      duration: 0.5,
      opacity: 1,
      y: "0px",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=4200px center",
        end: "top+=4200px center",
        toggleActions: "play none none reverse",
      },
    });

    //animation for section 2's container-3 fade out
    TweenMax.fromTo(
      this.section2Container3.current,
      { opacity: 1, y: "0px" },
      {
        duration: 0.5,
        opacity: 0,
        y: "-50px",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=4500px center",
          end: "top+=4500px center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    return (
      <div className="container-3" ref={this.section2Container3}>
        <div className="left">
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">Industry-leading colour accuracy</h3>
          </div>
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">ProMotion</h3>
          </div>
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">600 Nits brightness</h3>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">Ultra-low reflectivity</h3>
          </div>
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">True tone</h3>
          </div>
          <div className="icon">
            <img src="" alt="" className="icon-img" />
            <h3 className="header">P3 wide colour gamut</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Container3;
