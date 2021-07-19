import React, { Component, createRef } from "react";
import "../style/RobotAnimation.css";
import gsap from "gsap";
// import robot1 from "../assets/robot7webp/1.webp";
// import robot2 from "../assets/robot7webp/2.webp";
// import robot3 from "../assets/robot7webp/3.webp";
// import robot4 from "../assets/robot7webp/4.webp";
// import robot5 from "../assets/robot7webp/5.webp";
// import robot6 from "../assets/robot7webp/6.webp";
// import robot7 from "../assets/robot7webp/7.webp";
// import robot8 from "../assets/robot7webp/8.webp";
// import robot9 from "../assets/robot7webp/9.webp";
// import robot10 from "../assets/robot7webp/10.webp";
// import robot11 from "../assets/robot7webp/11.webp";
// import robot12 from "../assets/robot7webp/12.webp";
// import robot13 from "../assets/robot7webp/13.webp";
// import robot14 from "../assets/robot7webp/14.webp";
// import robot15 from "../assets/robot7webp/15.webp";
// import robot16 from "../assets/robot7webp/16.webp";
// import robot17 from "../assets/robot7webp/17.webp";
// import robot18 from "../assets/robot7webp/18.webp";
// import robot19 from "../assets/robot7webp/19.webp";
// import robot20 from "../assets/robot7webp/20.webp";
// import robot21 from "../assets/robot7webp/21.webp";
// import robot22 from "../assets/robot7webp/22.webp";
// import robot23 from "../assets/robot7webp/23.webp";
// import robot24 from "../assets/robot7webp/24.webp";
// import robot25 from "../assets/robot7webp/25.webp";
// import robot26 from "../assets/robot7webp/26.webp";
// import robot27 from "../assets/robot7webp/27.webp";
// import robot28 from "../assets/robot7webp/28.webp";
// import robot29 from "../assets/robot7webp/29.webp";
// import robot30 from "../assets/robot7webp/30.webp";
// import robot31 from "../assets/robot7webp/31.webp";
// import robot32 from "../assets/robot7webp/32.webp";
// import robot33 from "../assets/robot7webp/33.webp";
// import robot34 from "../assets/robot7webp/34.webp";
// import robot35 from "../assets/robot7webp/35.webp";
// import robot36 from "../assets/robot7webp/36.webp";
// import robot37 from "../assets/robot7webp/37.webp";
// import robot38 from "../assets/robot7webp/38.webp";
import robot1 from "../assets/robot7webp-png/1.webp";
import robot2 from "../assets/robot7webp-png/2.webp";
import robot3 from "../assets/robot7webp-png/3.webp";
import robot4 from "../assets/robot7webp-png/4.webp";
import robot5 from "../assets/robot7webp-png/5.webp";
import robot6 from "../assets/robot7webp-png/6.webp";
import robot7 from "../assets/robot7webp-png/7.webp";
import robot8 from "../assets/robot7webp-png/8.webp";
import robot9 from "../assets/robot7webp-png/9.webp";
import robot10 from "../assets/robot7webp-png/10.webp";
import robot11 from "../assets/robot7webp-png/11.webp";
import robot12 from "../assets/robot7webp-png/12.webp";
import robot13 from "../assets/robot7webp-png/13.webp";
import robot14 from "../assets/robot7webp-png/14.webp";
import robot15 from "../assets/robot7webp-png/15.webp";
import robot16 from "../assets/robot7webp-png/16.webp";
import robot17 from "../assets/robot7webp-png/17.webp";
import robot18 from "../assets/robot7webp-png/18.webp";
import robot19 from "../assets/robot7webp-png/19.webp";
import robot20 from "../assets/robot7webp-png/20.webp";
import robot21 from "../assets/robot7webp-png/21.webp";
import robot22 from "../assets/robot7webp-png/22.webp";
import robot23 from "../assets/robot7webp-png/23.webp";
import robot24 from "../assets/robot7webp-png/24.webp";
import robot25 from "../assets/robot7webp-png/25.webp";
import robot26 from "../assets/robot7webp-png/26.webp";
import robot27 from "../assets/robot7webp-png/27.webp";
import robot28 from "../assets/robot7webp-png/28.webp";
import robot29 from "../assets/robot7webp-png/29.webp";
import robot30 from "../assets/robot7webp-png/30.webp";
import robot31 from "../assets/robot7webp-png/31.webp";
import robot32 from "../assets/robot7webp-png/32.webp";
import robot33 from "../assets/robot7webp-png/33.webp";
import robot34 from "../assets/robot7webp-png/34.webp";
import robot35 from "../assets/robot7webp-png/35.webp";
import robot36 from "../assets/robot7webp-png/36.webp";
import robot37 from "../assets/robot7webp-png/37.webp";

class RobotAnimation5 extends Component {
  canvasRef = createRef();
  container = createRef();

  componentDidUpdate() {
    const { heights, viewType, homeRef } = this.props;
    const { section1, section2, section3, section4, section5, section6 } =
      heights;
    const newHeight =
      section1 + section2 + section3 + section4 + section5 + section6;

    const frameCount = 35;
    const html = document.documentElement;
    const context = this.canvasRef.current.getContext("2d");

    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = this.getCurrentImg(i);
    }

    // painting the first frame
    const img = new Image();
    img.src = this.getCurrentImg(1);

    this.canvasRef.current.width = 500;
    this.canvasRef.current.height = 500;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop - newHeight + 350;
      const maxScrollTop = 600;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction < 0 ? 0 : scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImg(frameIndex + 1, context, img));
    });

    gsap.fromTo(
      this.container.current,
      {
        background: "rgb(233, 233, 233)",
      },
      {
        background: "rgb(46, 46, 46)",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight} top`,
          end: `top+=${newHeight + 150} top`,
          scrub: 0.1,
        },
      }
    );
  }

  updateImg = (index, context, img) => {
    img.src = this.getCurrentImg(index);
    img.onload = function () {
      context.clearRect(0, 0, 500, 500);

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

      // case 38:
      //   return robot38;

      default:
        return robot1;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="robot-5" ref={this.container}>
          <canvas ref={this.canvasRef}></canvas>
        </div>
      </React.Fragment>
    );
  }
}

export default RobotAnimation5;
