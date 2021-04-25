import React, { Component, createRef } from "react";
import "../style/HomeSection10.css";
import abstract from "../assets/abstract.webp";
import phone from "../assets/abstractPhone.webp";
import gsap from "gsap";

class HomeSection10 extends Component {
  note1 = createRef();
  note2 = createRef();
  note3 = createRef();
  note4 = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
      section7,
      section8,
      section9,
    } = heights;

    const newHeight =
      section1 +
      section2 +
      section3 +
      section4 +
      section5 +
      section6 +
      section7 +
      section8 +
      section9;

    const {
      section1m,
      section2m,
      section3m,
      section4m,
      section5m,
      section6m,
      section7m,
      section8m,
      section9m,
    } = heights.mobileHeights;
    const newMobileHeight =
      section1m +
      section2m +
      section3m +
      section4m +
      section5m +
      section6m +
      section7m +
      section8m +
      section9m;

    let isDesktop = viewType === "desktop" ? true : false;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef,
        start: isDesktop
          ? `top+=${newHeight - 250} top`
          : `top+=${newMobileHeight - 750} top`,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      this.note1.current,
      { opacity: 0, y: "20px" },
      {
        duration: 0.3,
        y: "0px",
        opacity: 1,
      },
      0.1
    )
      .fromTo(
        this.note2.current,
        { opacity: 0, y: "20px" },
        {
          duration: 0.3,
          y: "0px",
          opacity: 1,
        },
        0.2
      )
      .fromTo(
        this.note3.current,
        { opacity: 0, y: "20px" },
        {
          duration: 0.3,
          y: "0px",
          opacity: 1,
        },
        0.3
      )
      .fromTo(
        this.note4.current,
        { opacity: 0, y: "20px" },
        {
          duration: 0.3,
          y: "0px",
          opacity: 1,
        },
        0.4
      );
  }

  render() {
    return (
      <section className="section-10">
        <div className="container-1">
          <div className="notes">
            <p ref={this.note1}>WIFI 6</p>
            <p ref={this.note2}>Gigabit-class lte</p>
            <p ref={this.note3}>usb-c port</p>
            <p ref={this.note4}>four speaker audio</p>
          </div>
          <img src={abstract} alt="abstract" className="img" />
        </div>
        <div className="container-2">
          <div>
            <div className="header">Use AR to see the new iPad.</div>
            <div className="context">
              Open this page using Safari on
              <br /> your iPhone or iPad.
            </div>
          </div>
          <img src={phone} alt="phone" className="phone-img" />
        </div>
      </section>
    );
  }
}

export default HomeSection10;
