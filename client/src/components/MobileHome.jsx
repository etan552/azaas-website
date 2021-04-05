import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import robotImg from "../assets/animation1.gif";
import shipImg from "../assets/shipImg-mobile.webp";
import officeImg from "../assets/office-mobile.webp";
import lighting from "../assets/lighting.svg";
import reflection from "../assets/reflective-fabric.svg";
import phone from "../assets/smartphone.svg";
import sun from "../assets/sun.svg";
import target from "../assets/target.svg";
import vennDiagram from "../assets/venn-diagram.svg";
import "../style/Home.css";
import "../style/HomeSection1.css";
import "../style/HomeSection2.css";

class MobileHome extends Component {
  constructor(props) {
    super(props);

    this.gif1 = robotImg;
    this.imgRef1 = createRef();
  }

  render() {
    if (this.imgRef1.current) {
      this.imgRef1.current.src = this.gif1;
    }

    return (
      <div className="home">
        <section className="section-1">
          <img
            src={this.gif1}
            alt="Robot"
            className="robot-img"
            ref={this.imgRef1}
          />
          <div>
            <div className="header">Your next computer is not a computer.</div>
            <div className="context">
              It’s a magical piece of glass. It’s so fast most PC laptops can’t
              catch up. It has pro cameras that can transform reality. And you
              can use it with touch, pencil, keyboard and now trackpad. It’s the
              new iPad Pro.
            </div>

            <Link to="/" className="link">
              Watch the film
            </Link>
          </div>
        </section>
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
              immersive, but also features incredibly advanced technologies.1
              Like ProMotion, True Tone and industry‑leading colour accuracy,
              which make everything feel responsive and look stunning. Quite
              simply, this combination of features makes it the world’s most
              advanced mobile display.
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
                <img
                  src={vennDiagram}
                  alt="venn diagram"
                  className="icon-img"
                />
                <h3 className="header">P3 wide colour gamut</h3>
              </div>
            </div>
          </div>
          <div className="container-4">
            <img src={officeImg} alt="office" />
            <img src={shipImg} alt="ship" />
          </div>
        </section>
        <section className="section-3">
          <div className="container-1">
            <div className="header">Cameras</div>
            <div className="context">
              Think you know
              <br />
              iPad cameras?
              <br />
              Think deeper.
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MobileHome;
