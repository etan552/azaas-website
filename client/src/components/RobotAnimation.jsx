import React, { Component, createRef } from "react";
import "../style/RobotAnimation.css";
import gsap from "gsap";
import robot1 from "../assets/robot/1.png";
import robot2 from "../assets/robot/2.png";
import robot3 from "../assets/robot/3.png";

class RobotAnimation extends Component {
  constructor(props) {
    super(props);

    this.img = new Image();
  }

  img1 = createRef();
  img2 = createRef();
  img3 = createRef();
  img4 = createRef();
  img5 = createRef();
  robotRef = createRef();
  canvas = createRef();

  state = {
    animationStep: 1,
    scrollPos: 0,
    currYPos: 0,
    stepSize: 10, // 10 steps per scroll
    duration: 0.2,
  };

  componentDidMount() {
    this.updateImg(3);
    const frameCount = 300;
    // const img = new Image();
    // img.src = this.updateImg(1);

    const context = this.canvas.current.getContext("2d");
    // this.canvas.current.width = 700;
    // this.canvas.current.height = 700;
    // img.onload = function () {
    //   context.drawImage(img, 0, 0);
    // };
    // window.addEventListener("scroll  ", this.handleScrolling);
    window.addEventListener("scroll", () => {
      const scrollTop = this.robotRef.current.scrollTop;
      const maxScrollTop =
        this.robotRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImg(frameIndex));
    });
  }

  updateImg = (index) => {
    const context = this.canvas.current.getContext("2d");
    this.canvas.current.width = 700;
    this.canvas.current.height = 700;
    console.log(1);
    const img = new Image();

    switch (index) {
      case 1:
        img.src = robot1;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };
        break;

      case 2:
        img.src = robot2;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };
        break;

      case 3:
        img.src = robot3;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };
        break;

      default:
        break;
    }
  };

  // handleScrolling = () => {
  //   // let scrollPos;
  //   // let currYPos = this.state.currYPos;
  //   let animationStep = Math.round(window.scrollY / this.state.stepSize);
  //   // this.img1 =
  //   // if (currYPos < window.scrollY) {
  //   //   scrollPos = this.state.scrollPos + 1;
  //   // } else if (currYPos > window.scrollY) {
  //   //   scrollPos = this.state.scrollPos - 1;
  //   // }

  //   // currYPos = window.scrollY;
  //   // this.setState({ scrollPos, currYPos });

  //   // const scrollPos = this.state.scrollPos + 1;
  //   this.setState({ animationStep });
  // };

  render() {
    const test = require("../assets/lighting.svg");
    // console.log(this.state.animationStep);
    // console.log(`---${window.scrollY}`);
    return (
      <React.Fragment>
        <div className="test-2" ref={this.robotRef}>
          <canvas ref={this.canvas}></canvas>
          {/* <div className="test img-1" ref={this.img1}></div>
          <div className="test img-2" ref={this.img2}></div>
          <div className="test img-3" ref={this.img3}></div>
          <div className="test img-4" ref={this.img4}></div>
          <div className="test img-5" ref={this.img5}></div>
          <div className="test-1">a</div> */}
        </div>
        <div className="test-1"></div>
        {/* <img src={test} height={200} width={200} alt="a" /> */}
      </React.Fragment>
    );
  }
}

export default RobotAnimation;
// gsap.fromTo(
//   this.img1.current,
//   { visibility: "visible" },
//   {
//     // opacity: 1,
//     visibility: "hidden",
//     scrollTrigger: {
//       trigger: this.robotRef.current,
//       start: "top+=200 top",
//       end: "top+=200 top",
//     },
//   }
// );

// gsap.fromTo(
//   this.img2.current,
//   { visibility: "visible" },
//   {
//     visibility: "hidden",

//     scrollTrigger: {
//       trigger: this.robotRef.current,
//       start: "top+=300 top",
//       end: "top+=300 top",
//     },
//   }
// );

// gsap.fromTo(
//   this.img3.current,
//   { opacity: 0 },
//   {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: this.robotRef.current,
//       start: "top+=400 top",
//       end: "top+=400 top",
//     },
//   }
// );

// gsap.fromTo(
//   this.img4.current,
//   { opacity: 0 },
//   {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: this.robotRef.current,
//       start: "top+=500 top",
//       end: "top+=500 top",
//     },
//   }
// );

// gsap.fromTo(
//   this.img5.current,
//   { opacity: 0 },
//   {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: this.robotRef.current,
//       start: "top+=600 top",
//       end: "top+=600 top",
//     },
//   }
// );
