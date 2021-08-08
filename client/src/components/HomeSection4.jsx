import React, { Component, createRef } from "react";
import ipadFrame from "../assets/ipadPro-horizontal.webp";
import gsap from "gsap";
import "../style/HomeSection4.css";
import blockChain from "../assets/Blockchain.gif";
import cloudComputing from "../assets/CloudComputing.gif";
import dataIntelligence from "../assets/DataIntelligence.gif";
import RobotAnimation3 from "./RobotAnimation3";
import blockchainAnimation from "../assets/blockchainAnimation.webm";
import gifF from "../assets/web gif webm/F.webm";
import gifJ from "../assets/web gif webm/J.webm";
import gifG from "../assets/web gif webm/G.webm";

class HomeSection4 extends Component {
  ref1 = createRef();
  ref2 = createRef();
  ref3 = createRef();
  imgContainer = createRef();
  headerRef = createRef();
  bottomImg = createRef();
  blockchainGif = createRef();

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

    // blockchain animation
    // opacity from 1 to 0 & width/height from 100 to 20 vw/vh
    gsap.fromTo(
      this.blockchainGif.current,
      {
        opacity: 1,
        height: "100vh",
        minWidth: "100vw",
      },
      {
        opacity: 0,
        height: "20vh",
        minWidth: "20vw",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 2300} top`,
          end: `top+=${newHeight + 3000} top`,
          scrub: true,
        },
      }
    );
  }

  render() {
    const { viewType, homeRef, heights } = this.props;
    return (
      <div className="section-4">
        <div style={{ height: "1px" }}></div>
        {viewType !== "desktop" && <div style={{ height: "440px" }}></div>}
        <div className="slideshow">
          <div className="view">
            <div ref={this.imgContainer}>
              <video className="gif-F" autoPlay loop muted>
                <source src={gifF} type="video/webm" />
              </video>
              <video className="gif-J" autoPlay loop muted>
                <source src={gifJ} type="video/webm" />
              </video>
              <video className="gif-G" autoPlay loop muted>
                <source src={gifG} type="video/webm" />
              </video>
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
              height: this.props.viewType === "desktop" ? "1500px" : "700px",
            }}
          ></div>
          <div className="container-1">
            <video
              className="blockchain"
              ref={this.blockchainGif}
              autoPlay
              loop
              muted
            >
              <source src={blockchainAnimation} type="video/webm" />
            </video>
            <RobotAnimation3
              homeRef={homeRef}
              viewType={viewType}
              heights={heights}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection4;
