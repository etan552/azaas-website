import React, { Component, createRef } from "react";
import "../style/HomeSection9.css";
import hand from "../assets/hand.webp";
import gsap from "gsap";
import edgeComputingGif from "../assets/edgeComputingGif.gif";

class HomeSection9 extends Component {
  container1Ref = createRef();
  handImgRef = createRef();
  header1 = createRef();
  context1 = createRef();
  notes1 = createRef();
  notes2 = createRef();
  edgeComputingRef = createRef();

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
    } = heights;

    const newHeight =
      section1 +
      section2 +
      section3 +
      section4 +
      section5 +
      section6 +
      section7 +
      section8;

    const {
      section1m,
      section2m,
      section3m,
      section4m,
      section5m,
      section6m,
      section7m,
      section8m,
    } = heights.mobileHeights;

    const newMobileHeight =
      section1m +
      section2m +
      section3m +
      section4m +
      section5m +
      section6m +
      section7m +
      section8m;

    let isDesktop = viewType === "desktop" ? true : false;

    gsap.fromTo(
      this.container1Ref.current,
      { y: "0px" },
      {
        y: "-30px",
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight} top`
            : `top+=${newMobileHeight - 300} top`,
          end: isDesktop
            ? `top+=${newHeight + 300} top`
            : `top+=${newMobileHeight} top`,
          scrub: 0.1,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.container1Ref.current,
      { opacity: 1 },
      {
        duration: 0.2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 300} top`
            : `top+=${newMobileHeight} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.handImgRef.current,
      { y: "0px", width: isDesktop ? "1233px" : "750px", x: "0px" },
      {
        y: "-80px",
        width: isDesktop ? "1470px" : "920px",
        x: isDesktop ? "-110px" : "-70px",
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 300} top`
            : `top+=${newMobileHeight} top`,
          end: isDesktop
            ? `top+=${newHeight + 800} top`
            : `top+=${newMobileHeight + 500} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      this.header1.current,
      { opacity: 0 },
      {
        duration: 0.3,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 700} top`
            : `top+=${newMobileHeight + 400} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.context1.current,
      { opacity: 0 },
      {
        duration: 0.3,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 700} top`
            : `top+=${newMobileHeight + 400} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.notes1.current,
      { opacity: 0, y: "20px" },
      {
        duration: 0.3,
        y: "0px",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 800} top`
            : `top+=${newMobileHeight + 500} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.notes2.current,
      {
        opacity: 0,
        y: "20px",
      },
      {
        duration: 0.3,
        y: "0px",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 850} top`
            : `top+=${newMobileHeight + 550} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.edgeComputingRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 200}px top`,
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
  }
  render() {
    return (
      <section className="section-9">
        <div className="video-container" ref={this.edgeComputingRef}>
          <div>
            <img
              className="edge-computing"
              src={edgeComputingGif}
              alt="edge computing gif"
            />
          </div>
        </div>
        <div className="container-1">
          <div className="inner-1" ref={this.container1Ref}>
            {/* <div className="header">Portability</div>
            <div className="context">
              Goes where no <br />
              laptop would dare.
            </div> */}
          </div>
          <img
            src={hand}
            alt="hand holding an ipad"
            className="img"
            ref={this.handImgRef}
          />
          <div className="inner-2">
            <div className="header" ref={this.header1}>
              Thin, light
              <br /> and durable
            </div>
            <div className="context" ref={this.context1}>
              iPad Pro is incredibly capable while still being easy to carry
              with you everywhere — slip it into a backpack or rest it on a tray
              table. And it has up to 10 hours of battery life to keep you going
              all day.3
            </div>

            <div className="notes">
              <p ref={this.notes1}>Just over a pound</p>
              <p ref={this.notes2}>All-day batteries</p>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="header">Connectivity</div>
          <div className="context">
            iPad Pro is the ultimate mobile workstation. You can print, project
            and send files wirelessly. The USB‑C port lets you connect all types
            of accessories, like a camera, external drive or display. Wi‑Fi and
            LTE are faster than ever, so you can stay connected everywhere.4 And
            when it’s time to stream your favourite show or listen to your party
            playlist, iPad Pro has an amazing four speaker audio system built
            in.
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection9;
