import React, { Component, createRef } from "react";
import "../style/HomeSection6.css";
import laptop from "../assets/floatingKeyboard.webp";
import gsap from "gsap";

class HomeSection6 extends Component {
  container1Ref = createRef();
  container2Ref = createRef();
  note1 = createRef();
  note2 = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1, section2, section3, section4, section5 } = heights;
    const newHeight = section1 + section2 + section3 + section4 + section5;

    const {
      section1m,
      section2m,
      section3m,
      section4m,
      section5m,
    } = heights.mobileHeights;
    const newMobileHeight =
      section1m + section2m + section3m + section4m + section5m;

    let isDesktop = viewType === "desktop" ? true : false;

    gsap.fromTo(
      this.container1Ref.current,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 200} top`
            : `top+=${newMobileHeight - 200} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.container2Ref.current,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 800} top`
            : `top+=${newMobileHeight + 600} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.note1.current,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 800} top`
            : `top+=${newMobileHeight + 600} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.note2.current,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 800} top`
            : `top+=${newMobileHeight + 600} top`,
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    return (
      <section className="section-6">
        <div className="container-1" ref={this.container1Ref}>
          <div className="header">Magic Keyboard</div>
          <div className="context">Yes, it floats.</div>
        </div>
        <div className="container-2" ref={this.container2Ref}>
          <div className="header">Magic Keyboard</div>
          <div className="context">
            The all-new Magic Keyboard is an amazing companion for iPad Pro.2 It
            features the best typing experience ever on iPad, a trackpad that
            opens up new ways to work with iPadOS, a USB‑C port for pass-through
            charging, and front and back protection. And it features a floating
            cantilever design, allowing you to attach iPad Pro magnetically, and
            smoothly adjust it to the perfect viewing angle for you.
          </div>
        </div>

        <div className="img-container">
          <div
            style={{
              height: this.props.viewType === "desktop" ? "750px" : "500px",
            }}
          ></div>
          <img src={laptop} alt="laptop" className="img-1" />

          <div className="notes">
            <p className="note1" ref={this.note1}>
              Attaches magnetically
            </p>
            <p className="note2" ref={this.note2}>
              floating design
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection6;
