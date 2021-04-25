import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import lighting from "../../assets/lighting.svg";
import reflection from "../../assets/reflective-fabric.svg";
import phone from "../../assets/smartphone.svg";
import sun from "../../assets/sun.svg";
import target from "../../assets/target.svg";
import vennDiagram from "../../assets/venn-diagram.svg";

import "../../style/HomeSection2.css";

class Container3 extends Component {
  section2Container3 = createRef();

  componentDidMount() {
    const { homeRef, heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;
    let isDesktop = viewType === "desktop" ? true : false;

    // animation for section 2' container-3 fade in
    TweenMax.to(this.section2Container3.current, {
      duration: 0.5,
      opacity: 1,
      y: "0px",
      scrollTrigger: {
        trigger: homeRef,
        start: isDesktop
          ? `top+=${newHeight + 1154} top`
          : `top+=${newHeight + 954} top`,
        // end: "top+=4200px top",
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
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2054} top`
            : `top+=${newHeight + 1854} top`,
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
            <img src={target} alt="target" className="icon-img" />
            <h3 className="header">Industry-leading colour accuracy</h3>
          </div>
          <div className="icon">
            <img src={lighting} alt="battery" className="icon-img" />
            <h3 className="header">ProMotion</h3>
          </div>
          <div className="icon">
            <img src={sun} alt="sun" className="icon-img" />
            <h3 className="header">600 Nits brightness</h3>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src={reflection} alt="reflection" className="icon-img" />
            <h3 className="header">Ultra-low reflectivity</h3>
          </div>
          <div className="icon">
            <img src={phone} alt="phone" className="icon-img" />
            <h3 className="header">True tone</h3>
          </div>
          <div className="icon">
            <img src={vennDiagram} alt="venn diagram" className="icon-img" />
            <h3 className="header">P3 wide colour gamut</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Container3;
