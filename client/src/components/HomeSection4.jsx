import React, { Component, createRef } from "react";
import ipadFrame from "../assets/ipadPro-horizontal.webp";
import gsap from "gsap";
import "../style/HomeSection4.css";
import blockChain from "../assets/Blockchain.gif";
import cloudComputing from "../assets/CloudComputing.gif";
import dataIntelligence from "../assets/DataIntelligence.gif";
import RobotAnimation3 from "./RobotAnimation3";

class HomeSection4 extends Component {
  ref1 = createRef();
  ref2 = createRef();
  ref3 = createRef();
  imgContainer = createRef();
  headerRef = createRef();
  bottomImg = createRef();
  blockChainGif = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;

    const { section1, section2, section3 } = heights;
    const newHeight = section1 + section2 + section3;

    const { section1m, section2m, section3m } = heights.mobileHeights;
    const newMobileHeight = section1m + section2m + section3m + 440;

    let isDesktop = viewType === "desktop" ? true : false;

    gsap.fromTo(
      this.ref2.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 380} top`
            : `top+=${newMobileHeight + 300} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.ref3.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 750} top`
            : `top+=${newMobileHeight + 670} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // slideshow animation
    gsap.fromTo(
      this.imgContainer.current,
      {
        x: viewType === "desktop" ? "-940px" : "-660px",
      },
      {
        duration: 0.5,
        x: viewType === "desktop" ? "-1900px" : "-1320px",
        ease: "power2",
        scrollTrigger: {
          trigger: homeRef,
          start:
            viewType === "desktop"
              ? `top+=${newHeight + 750} top`
              : `top+=${newMobileHeight + 670} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.imgContainer.current,
      {
        x: "0px",
      },
      {
        duration: 0.5,
        x: viewType === "desktop" ? "-940px" : "-660px",
        ease: "power2",
        scrollTrigger: {
          trigger: homeRef,
          start:
            viewType === "desktop"
              ? `top+=${newHeight + 380} top`
              : `top+=${newMobileHeight + 300} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // bottom header animation
    gsap.fromTo(
      this.headerRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2550} top`
            : `top+=${newMobileHeight + 2050} top`,
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    const { viewType, homeRef, heights } = this.props;
    return (
      <div className="section-4">
        <div style={{ height: "01px" }}></div>
        {viewType !== "desktop" && <div style={{ height: "440px" }}></div>}
        <div className="slideshow">
          <img src={ipadFrame} alt="ipad frame" className="frame" />
          <div className="view">
            <div ref={this.imgContainer}>
              <img src={blockChain} alt="" />
              <img src={cloudComputing} alt="" />
              <img src={dataIntelligence} alt="" />
              {/* <img src={office1} alt="office" className="slide-1" />
              <img src={office2} alt="office" className="slide-2" />
              <img src={office3} alt="office" className="slide-3" /> */}
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <div className="item" ref={this.ref1}>
              <div className="header">Blockchain</div>
              <div className="context">
                On the new iPad Pro, AR apps become even more realistic. Placing
                an AR object now happens instantly. Realistic object occlusion
                allows AR objects to pass in front of and behind real-world
                structures. Improved motion capture and people occlusion are
                more accurate than ever. And developers will be able to create
                even more immersive experiences.
              </div>
            </div>
            <div className="item" ref={this.ref2}>
              <div className="header">Cloud Computing</div>
              <div className="context">
                The pro camera system makes iPad Pro incredibly versatile.
                Shoot, edit and share a 4K video, all on the same device.
                Capture an entire room in one shot with the Ultra Wide camera
                and use Markup to redesign it on the spot. Or scan a document,
                sign or mark it up with Apple Pencil, then send back your notes
                with a tap.
              </div>
            </div>
            <div className="item" ref={this.ref3}>
              <div className="header">Data Intelligence</div>
              <div className="context">
                The front-facing TrueDepth camera enables Face ID, the world’s
                most secure facial authentication in a tablet — and in a
                computer. It also means you can chat with friends using
                FaceTime, take Portrait selfies or liven up your Messages
                conversations by turning yourself into an Animoji.
              </div>
            </div>
          </div>
          <div
            style={{
              height: this.props.viewType === "desktop" ? "700px" : "700px",
            }}
          ></div>
          <div className="container-1">
            <RobotAnimation3
              homeRef={homeRef}
              viewType={viewType}
              heights={heights}
            />

            {/* <div ref={this.headerRef}>
              <div className="header">Performance</div>
              <div className="context">Faster than you can say PC.</div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection4;
