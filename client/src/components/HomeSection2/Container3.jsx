import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import lighting from "../../assets/lighting.svg";
import reflection from "../../assets/reflective-fabric.svg";
import phone from "../../assets/smartphone.svg";
import sun from "../../assets/sun.svg";
import target from "../../assets/target.svg";
import vennDiagram from "../../assets/venn-diagram.svg";
import algorithm from "../../assets/Algorithm.gif";
import blockChain from "../../assets/Blockchain.gif";
import cloudComputing from "../../assets/CloudComputing.gif";
import dataIntelligence from "../../assets/DataIntelligence.gif";
import edgeComputing from "../../assets/EdgeComputing.gif";

import "../../style/HomeSection2.css";

class Container3 extends Component {
  section2Container3 = createRef();

  componentDidUpdate() {
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
          ? `top+=${newHeight + 1380} top`
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
            ? `top+=${newHeight + 2350} top`
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
            <img src={algorithm} alt="target" className="icon-img" />
            <h3 className="header">Algorithm</h3>
          </div>
          <div className="icon">
            <img src={blockChain} alt="battery" className="icon-img" />
            <h3 className="header">Blockchain</h3>
          </div>
          <div className="icon">
            <img src={cloudComputing} alt="sun" className="icon-img" />
            <h3 className="header">Cloud Computing</h3>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src={dataIntelligence} alt="reflection" className="icon-img" />
            <h3 className="header">Data Intelligence</h3>
          </div>
          <div className="icon">
            <img src={edgeComputing} alt="phone" className="icon-img" />
            <h3 className="header">Edge Computing</h3>
          </div>
          <div className="icon">
            {/* <img src={vennDiagram} alt="venn diagram" className="icon-img" />
            <h3 className="header">P3 wide colour gamut</h3> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Container3;
