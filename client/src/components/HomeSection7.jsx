import React, { Component, createRef } from "react";
import office from "../assets/office3.webp";
import "../style/HomeSection7.css";
import gsap from "gsap";
import backgroundImg from "../assets/abstract.webp";
import RobotAnimation5 from "./RobotAnimation5";
import dataIntelligence from "../assets/dataintelligenceAnimation.webm";

class HomeSection7 extends Component {
  sectionRef = createRef();
  container1Ref = createRef();
  container3Ref = createRef();
  container4Ref = createRef();
  container5Ref = createRef();
  container6Ref = createRef();
  container7Ref = createRef();
  imgRef = createRef();
  dataIntelligenceRef = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1, section2, section3, section4, section5, section6 } =
      heights;
    const newHeight =
      section1 + section2 + section3 + section4 + section5 + section6 - 900;

    const { section1m, section2m, section3m, section4m, section5m, section6m } =
      heights.mobileHeights;
    const newMobileHeight =
      section1m + section2m + section3m + section4m + section5m + section6m;

    let isDesktop = viewType === "desktop" ? true : false;

    // changing container 1 background color
    gsap.fromTo(
      this.sectionRef.current,
      {
        backgroundColor: "rgb(255, 255, 255)",
      },
      {
        backgroundColor: "rgb(24, 24, 24)",
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 900} top`
            : `top+=${newMobileHeight + 500 + 940 - window.innerHeight} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // container 3 fade out
    gsap.fromTo(
      this.container3Ref.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2200} top`
            : `top+=${newMobileHeight + 1900} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // abstract img animation
    gsap.fromTo(
      this.dataIntelligenceRef.current,
      {
        x: -0.3134 * window.innerWidth,
        y: isDesktop ? "50px" : "220px",
      },
      {
        x: 0.3284 * window.innerWidth,
        y: isDesktop ? "50px" : "220px",
        ease: "power1.in",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 4100} top`
            : `top+=${newMobileHeight + 3800} top`,
          end: isDesktop
            ? `top+=${newHeight + 4800} top`
            : `top+=${newMobileHeight + 4500} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    // abstract img animation
    gsap.fromTo(
      this.dataIntelligenceRef.current,
      {
        minWidth: isDesktop ? "90vw" : "690px",
        minHeight: isDesktop ? "90vh" : "507px",
        y: isDesktop ? 220 : "310px",
        x: 0,
      },
      {
        minWidth: isDesktop ? "100vw" : "845px",
        minHeight: isDesktop ? "100vh" : "623px",
        y: isDesktop ? "50px" : "220px",
        x: -0.3134 * window.innerWidth,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2600} top`
            : `top+=${newMobileHeight + 2300} top`,
          end: isDesktop
            ? `top+=${newHeight + 3100} top`
            : `top+=${newMobileHeight + 2800} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    // abstract img animation
    gsap.fromTo(
      this.dataIntelligenceRef.current,
      {
        minWidth: "110vw",
        minHeight: "110vh",
        y: "0px",
      },
      {
        minWidth: isDesktop ? "90vw" : "690px",
        minHeight: isDesktop ? "90vh" : "507px",
        y: isDesktop ? 220 : "310px",

        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2100} top`
            : `top+=${newMobileHeight + 1800} top`,
          end: isDesktop
            ? `top+=${newHeight + 2500} top`
            : `top+=${newMobileHeight + 2200} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    // container 4 fade out
    gsap.fromTo(
      this.container4Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2350} top`
            : `top+=${newMobileHeight + 2050} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.container4Ref.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2700} top`
            : `top+=${newMobileHeight + 2400} top`,
          toggleActions: "play none none reverse",
        },
      }
    );
    // container 4 fade in

    gsap.fromTo(
      this.container4Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight} top`
            : `top+=${newMobileHeight + 2400} top`,
        },
      }
    );

    // container 5 fade in
    gsap.fromTo(
      this.container5Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 3000} top`
            : `top+=${newMobileHeight + 2700} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // container 5 vertical movement
    gsap.fromTo(
      this.container5Ref.current,
      {
        y: "0px",
      },
      {
        y: "-170px",
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 3000} top`
            : `top+=${newMobileHeight + 2700} top`,
          end: isDesktop
            ? `top+=${newHeight + 4000} top`
            : `top+=${newMobileHeight + 3700} top`,
          scrub: 0.1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // container 6 fade in
    gsap.fromTo(
      this.container6Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 4900} top`
            : `top+=${newMobileHeight + 4600} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // container 6 vertical movement
    gsap.fromTo(
      this.container6Ref.current,
      {
        y: "0px",
      },
      {
        y: "-100px",
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 4900} top`
            : `top+=${newMobileHeight + 4600} top`,
          end: isDesktop
            ? `top+=${newHeight + 5800} top`
            : `top+=${newMobileHeight + 5500} top`,
          scrub: 0.1,
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    const { homeRef, heights, viewType } = this.props;
    return (
      <section className="section-7">
        <div className="top" ref={this.sectionRef}>
          <RobotAnimation5
            homeRef={homeRef}
            heights={heights}
            viewType={viewType}
          />
          {/* <img src={office} alt="office" className="img-1" ref={this.imgRef} /> */}
          <div className="container-2">
            <div className="header">Trackpad reimagined</div>
            <div className="context">
              The click-anywhere trackpad opens up a whole new way to work in
              iPadOS. It allows control of the new cursor in iPadOS, which is
              perfect for tasks like editing a spreadsheet, selecting text or
              simply doing everything directly from the trackpad. And you can
              navigate fluidly with familiar Multi‑Touch gestures, like swiping
              to go Home and switching between spaces.
            </div>
          </div>
          <div className="container-1" ref={this.container1Ref}>
            <div className="header">Full‑sized keyboard</div>
            <div className="context">
              A full-sized keyboard designed for iPad Pro brings individual hard
              key caps and a scissor mechanism with 1 millimetre of travel for a
              responsive, comfortable and quiet typing experience. So go ahead;
              write your novel, knock out a business plan or rip through your
              inbox. And with backlit keys, you can get things done day or
              night.
            </div>
          </div>
        </div>
        <div style={{ height: "4000px" }}></div>
        <div className="bottom">
          <video
            className="data-intelligence"
            ref={this.dataIntelligenceRef}
            autoPlay
            loop
            muted
          >
            <source src={dataIntelligence} type="video/webm" />
          </video>
          <div className="container-3" ref={this.container3Ref}></div>
          <div className="container-4" ref={this.container4Ref}>
            <div className="header">Trackpad for iPadOS</div>
            <div className="context">
              Trackpad support opens up powerful new ways to use your iPad. The
              reimagined cursor experience has been designed specifically to
              work in a touch‑first environment. It’s contextual, so it
              transforms into the tool you need depending on the content you’re
              pointing to, like buttons, app icons and text. It’s perfect for
              tasks where you need an extra level of precision, like building a
              spreadsheet or editing text. You can also use intuitive trackpad
              gestures to quickly get around in iPadOS.
            </div>
          </div>
          <div className="container-5 notes" ref={this.container5Ref}>
            Appear when <br /> you need it
          </div>
          <div className="container-6 notes" ref={this.container6Ref}>
            <div className="text-1">
              Easily select <br /> and formats text
            </div>
            <div className="text-2">
              intelligently <br /> adapts to content
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection7;
