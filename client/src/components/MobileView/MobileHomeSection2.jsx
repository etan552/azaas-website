import React, { Component } from "react";
import shipImg from "../../assets/shipImg-mobile.webp";
import officeImg from "../../assets/office-mobile.webp";
import lighting from "../../assets/lighting.svg";
import reflection from "../../assets/reflective-fabric.svg";
import phone from "../../assets/smartphone.svg";
import sun from "../../assets/sun.svg";
import target from "../../assets/target.svg";
import vennDiagram from "../../assets/venn-diagram.svg";
import "../../style/HomeSection2.css";

class MobileHomeSection2 extends Component {
  render() {
    return (
      <section className="section-2">
        <div className="container-1">
          <img
            className="shipImg"
            src={officeImg}
            alt="officeImg"
            ref={this.section2Img}
          />
          <div>
            <div className="header">Liquid Retina display</div>
            <div className="context">
              Try to find a more advanced mobile display. We’ll wait.
            </div>
          </div>
          <img
            className="shipImg"
            src={shipImg}
            alt="shipImg"
            ref={this.section2Img}
          />
        </div>
        <div className="container-2">
          <div className="header">Liquid Retina technology</div>
          <div className="context">
            The edge-to-edge Liquid Retina display is not only gorgeous and
            immersive, but also features incredibly advanced technologies.1 Like
            ProMotion, True Tone and industry‑leading colour accuracy, which
            make everything feel responsive and look stunning. Quite simply,
            this combination of features makes it the world’s most advanced
            mobile display.
          </div>
        </div>
        <div className="container-3">
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
        <div className="container-4">
          <img src={officeImg} alt="office" />
          <img src={shipImg} alt="ship" />
        </div>
      </section>
    );
  }
}

export default MobileHomeSection2;
