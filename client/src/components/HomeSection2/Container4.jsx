import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import officeImg from "../../assets/office.png";
import "../../style/HomeSection2.css";

class Container4 extends Component {
  section2Container4 = createRef();

  componentDidMount() {
    // animation for container-4 horizontal movement
    TweenMax.to(this.section2Container4.current, {
      duration: 1,
      opacity: 1,
      x: "-280px",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=4400 center",
        end: "top+=5000 center",
        toggleActions: "play none none reverse",
        scrub: 0.5,
      },
    });

    // animation for container-4 vertical movement
    TweenMax.to(this.section2Container4.current, {
      duration: 0.5,
      y: "-50vh",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=5100 center",
        end: "top+=5600 center",
        toggleActions: "play none none reverse",
        scrub: 0.5,
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
