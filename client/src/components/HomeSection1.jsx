import React, { Component, createRef } from "react";
import spinningRobot from "../assets/animation1.webp";
import { Link } from "react-router-dom";
import "../style/HomeSection1.css";

import robot1 from "../assets/robot/1.webp";
import robot2 from "../assets/robot/2.webp";
import robot3 from "../assets/robot/3.webp";
import robot4 from "../assets/robot/4.webp";
import robot5 from "../assets/robot/5.webp";
import robot6 from "../assets/robot/6.webp";
import robot7 from "../assets/robot/7.webp";
import robot8 from "../assets/robot/8.webp";
import robot9 from "../assets/robot/9.webp";
import robot10 from "../assets/robot/10.webp";
import robot11 from "../assets/robot/11.webp";
import robot12 from "../assets/robot/12.webp";
import robot13 from "../assets/robot/13.webp";
import robot14 from "../assets/robot/14.webp";
import robot15 from "../assets/robot/15.webp";
import robot16 from "../assets/robot/16.webp";
import robot17 from "../assets/robot/17.webp";
import robot18 from "../assets/robot/18.webp";
import robot19 from "../assets/robot/19.webp";
import robot20 from "../assets/robot/20.webp";
import robot21 from "../assets/robot/21.webp";
import robot22 from "../assets/robot/22.webp";
import robot23 from "../assets/robot/23.webp";
import robot24 from "../assets/robot/24.webp";
import robot25 from "../assets/robot/25.webp";
import robot26 from "../assets/robot/26.webp";
import robot27 from "../assets/robot/27.webp";
import robot28 from "../assets/robot/28.webp";
import robot29 from "../assets/robot/29.webp";
import robot30 from "../assets/robot/30.webp";
import robot31 from "../assets/robot/31.webp";
import robot32 from "../assets/robot/32.webp";
import robot33 from "../assets/robot/33.webp";
import robot34 from "../assets/robot/34.webp";
import robot35 from "../assets/robot/35.webp";
import robot36 from "../assets/robot/36.webp";
import robot37 from "../assets/robot/37.webp";
import robot38 from "../assets/robot/38.webp";
import robot39 from "../assets/robot/39.webp";
import robot40 from "../assets/robot/40.webp";
import robot41 from "../assets/robot/41.webp";
import robot42 from "../assets/robot/42.webp";
import dont from "../assets/dont.webp";
import makeThem from "../assets/makeThem.webp";
import think from "../assets/think.webp";

class HomeSection1 extends Component {
  constructor(props) {
    super(props);

    this.gif = spinningRobot;
    this.imgRef = createRef();
    this.canvas = createRef();
  }

  componentDidMount() {
    const frameCount = 42;
    const html = document.documentElement;
    const context = this.canvas.current.getContext("2d");

    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = this.getCurrentImg(i);
    }

    // painting the first frame
    const img = new Image();
    img.src = this.getCurrentImg(1);
    this.canvas.current.width = 900;
    this.canvas.current.height = 700;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    // window.addEventListener("scroll  ", this.handleScrolling);
    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = 2100 - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImg(frameIndex + 1, context, img));
    });
  }

  updateImg = (index, context, img) => {
    img.src = this.getCurrentImg(index);
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  };

  getCurrentImg = (index) => {
    switch (index) {
      case 1:
        return robot1;

      case 2:
        return robot2;

      case 3:
        return robot3;

      case 4:
        return robot4;

      case 5:
        return robot5;

      case 6:
        return robot6;

      case 7:
        return robot7;

      case 8:
        return robot8;

      case 9:
        return robot9;

      case 10:
        return robot10;

      case 11:
        return robot11;

      case 12:
        return robot12;

      case 13:
        return robot13;

      case 14:
        return robot14;

      case 15:
        return robot15;

      case 16:
        return robot16;

      case 17:
        return robot17;

      case 18:
        return robot18;

      case 19:
        return robot19;

      case 20:
        return robot20;

      case 21:
        return robot21;

      case 22:
        return robot22;

      case 23:
        return robot23;

      case 24:
        return robot24;

      case 25:
        return robot25;

      case 26:
        return robot26;

      case 27:
        return robot27;

      case 28:
        return robot28;

      case 29:
        return robot29;

      case 30:
        return robot30;

      case 31:
        return robot31;

      case 32:
        return robot32;

      case 33:
        return robot33;

      case 34:
        return robot34;

      case 35:
        return robot35;

      case 36:
        return robot36;

      case 37:
        return robot37;

      case 38:
        return robot38;

      case 39:
        return robot39;

      case 40:
        return robot40;

      case 41:
        return robot41;

      case 42:
        return robot42;

      default:
        break;
    }
  };

  render() {
    if (this.imgRef.current) this.imgRef.current.src = this.gif;
    return (
      <section className="section-1">
        <div className="canvas-container">
          <div className="imgs">
            <canvas ref={this.canvas}></canvas>
            <img src={dont} alt="" className="dontImg" />
            <img src={makeThem} alt="" className="makeThemImg" />
            <img src={think} alt="" className="thinkImg" />
          </div>
        </div>

        <div>
          <div className="context">
            It’s a magical piece of glass.
            <br />
            It’s so fast most PC laptops can’t catch up.
            <br />
            It has pro cameras that can transform reality.
            <br />
            And you can use it with touch, pencil, keyboard and now trackpad.
            <br />
            It’s the new iPad Pro.
          </div>

          <Link to="#" className="link">
            Watch the film
          </Link>
        </div>
        {/* <img
          src={this.gif}
          alt="Robot"
          className="robot-img"
          ref={this.imgRef}
        />
        <div>
          <h1 className="header">Don't make them think.</h1>
          <div className="context">
            It’s a magical piece of glass.
            <br />
            It’s so fast most PC laptops can’t catch up.
            <br />
            It has pro cameras that can transform reality.
            <br />
            And you can use it with touch, pencil, keyboard and now trackpad.
            <br />
            It’s the new iPad Pro.
          </div>

          <Link to="#" className="link">
            Watch the film
          </Link>
        </div> */}
      </section>
    );
  }
}

export default HomeSection1;
