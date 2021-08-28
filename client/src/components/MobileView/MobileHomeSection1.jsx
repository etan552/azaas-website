import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import robotImg from "../../assets/animation1.webp";
import "../../style/HomeSection1.css";
import mainImg from "../../assets/mobile/section1/mSection1MainImg.webp";

class MobileHomeSection1 extends Component {
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
      <section className="section-1">
        <img
          src={this.gif1}
          alt="Robot"
          className="robot-img"
          ref={this.imgRef1}
        />
        <div>
          <img src={mainImg} alt="Don't make them think" className="main-img" />
          <div className="context">
            It’s a magical piece of glass. It’s so fast most PC laptops can’t
            catch up. It has pro cameras that can transform reality. And you can
            use it with touch, pencil, keyboard and now trackpad. It’s the new
            iPad Pro.
          </div>

          <Link to="/" className="link">
            Watch the film
          </Link>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection1;
