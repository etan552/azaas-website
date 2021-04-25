import React, { Component, createRef } from "react";
import "../style/HomeSection5.css";
import gsap from "gsap";
import office1 from "../assets/office1.webp";
import office2 from "../assets/office2.webp";
import office3 from "../assets/office3.webp";

class HomeSection5 extends Component {
  img1 = createRef();
  img2 = createRef();
  img3 = createRef();
  img4 = createRef();
  img5 = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1, section2, section3, section4 } = heights;
    const newHeight = section1 + section2 + section3 + section4;

    const {
      section1m,
      section2m,
      section3m,
      section4m,
    } = heights.mobileHeights;
    const newMobileHeight = section1m + section2m + section3m + section4m;

    let isDesktop = viewType === "desktop" ? true : false;

    gsap.fromTo(
      this.img1.current,
      {
        y: "0px",
      },
      {
        y: isDesktop ? "-100px" : "-70px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 880} top`
            : `top+=${newMobileHeight + 300} top`,
          end: isDesktop
            ? `top+=${newHeight + 1220} top`
            : `top+=${newMobileHeight + 920} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      this.img2.current,
      {
        y: "0px",
      },
      {
        y: isDesktop ? "-100px" : "-70px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 1050} top`
            : `top+=${newMobileHeight + 550} top`,
          end: isDesktop
            ? `top+=${newHeight + 1500} top`
            : `top+=${newMobileHeight + 1000} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      this.img3.current,
      {
        y: "0px",
      },
      {
        y: isDesktop ? "-100px" : "-70px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2000} top`
            : `top+=${newMobileHeight + 1300} top`,
          end: isDesktop
            ? `top+=${newHeight + 2500} top`
            : `top+=${newMobileHeight + 1800} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      this.img4.current,
      {
        y: "0px",
      },
      {
        y: isDesktop ? "-100px" : "-70px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2150} top`
            : `top+=${newMobileHeight + 1100} top`,
          end: isDesktop
            ? `top+=${newHeight + 2550} top`
            : `top+=${newMobileHeight + 1600} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      this.img5.current,
      {
        y: "0px",
        width: isDesktop ? "1100px" : "700px",
        height: isDesktop ? "800px" : "535px",
      },
      {
        y: "-70px",
        width: isDesktop ? "980px" : "625px",
        height: isDesktop ? "720px" : "479px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 3000} top`
            : `top+=${newMobileHeight + 2000} top`,
          end: isDesktop
            ? `top+=${newHeight + 3500} top`
            : `top+=${newMobileHeight + 2500} top`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );
  }

  render() {
    return (
      <section className="section-5">
        <div className="container-1">
          <div className="header">A12Z Bionic</div>
          <div className="context">
            With the A12Z Bionic chip, iPad Pro is so fast it outpaces most PC
            laptops available today. It makes everything you do fast and fluid,
            from your everyday tasks to graphics-intensive workflows. And the
            8-core graphics processor means even more performance and realism
            for the apps and games where it matters most.
          </div>
        </div>
        <div className="container-2">
          <div className="header">Pro workflow</div>
          <div className="context">
            A12Z Bionic is designed to be put to work, especially with pro apps.
            The 8‑core graphics processor delivers fluid performance for things
            like 4K video editing, 3D design and augmented reality. Enhanced
            thermal design means higher peak and longer sustained performance —
            critical for pro workflows. And the Apple‑designed Neural Engine
            enables on‑device machine learning ready for the next generation of
            pro apps.
          </div>
        </div>
        <div className="container-3">
          <div className="header">Multitasking</div>
          <div className="context">
            iPadOS is designed to harness the power and performance of iPad Pro.
            Lightning‑fast hardware and powerful software were designed in
            concert to make every interaction snappy and smooth. Which makes
            working with multiple apps at once, and moving between spaces, quick
            and effortless.
          </div>
        </div>
        <img src={office1} alt="office" className="img-1" ref={this.img1} />
        <img src={office2} alt="office" className="img-2" ref={this.img2} />
        <img src={office3} alt="office" className="img-3" ref={this.img3} />
        <img src={office1} alt="office" className="img-4" ref={this.img4} />
        <img src={office3} alt="office" className="img-5" ref={this.img5} />
      </section>
    );
  }
}

export default HomeSection5;
