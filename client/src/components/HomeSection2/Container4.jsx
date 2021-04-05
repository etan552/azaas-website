import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import officeImg from "../../assets/office.webp";
import "../../style/HomeSection2.css";

class Container4 extends Component {
  section2Container4 = createRef();

  componentDidUpdate() {
    const { viewType } = this.props;

    // animation for container-4 horizontal movement
    TweenMax.to(this.section2Container4.current, {
      duration: 1,
      opacity: 1,
      x: viewType === "desktop" ? "-280px" : "-210px",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=4400 center",
        end: "top+=5000 center",
        toggleActions: "play none none reverse",
        scrub: 0.1,
      },
    });

    // animation for container-4 vertical movement
    TweenMax.to(this.section2Container4.current, {
      duration: 0.5,
      y: "-120vh",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=5200 center",
        end: "top+=6600 center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }

  render() {
    return (
      <div className="container-4" ref={this.section2Container4}>
        <img src={officeImg} alt="officeimg" />
      </div>
    );
  }
}

export default Container4;
