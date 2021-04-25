import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import officeImg from "../../assets/office.webp";
import "../../style/HomeSection2.css";

class Container4 extends Component {
  section2Container4 = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;
    let isDesktop = viewType === "desktop" ? true : false;

    // animation for container-4 horizontal movement
    TweenMax.to(this.section2Container4.current, {
      duration: 1,
      opacity: 1,
      x: isDesktop ? "-280px" : "-210px",
      scrollTrigger: {
        trigger: homeRef,
        start: isDesktop
          ? `top+=${newHeight + 3254} center`
          : `top+=${newHeight + 3254} center`,
        end: isDesktop
          ? `top+=${newHeight + 3854} center`
          : `top+=${newHeight + 3854} center`,
        toggleActions: "play none none reverse",
        scrub: 0.1,
      },
    });

    // animation for container-4 vertical movement
    TweenMax.to(this.section2Container4.current, {
      duration: 0.5,
      y: "-120vh",
      scrollTrigger: {
        trigger: homeRef,
        start: isDesktop
          ? `top+=${newHeight + 4054} center`
          : `top+=${newHeight + 4054} center`,
        end: isDesktop
          ? `top+=${newHeight + 5454} center`
          : `top+=${newHeight + 5454} center`,
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
