import React, { Component, createRef } from "react";
import office from "../assets/office.webp";
import ipadFrame from "../assets/ipadPro-horizontal.webp";
import office1 from "../assets/office1.webp";
import office2 from "../assets/office2.webp";
import office3 from "../assets/office3.webp";
import robotVideo from "../assets/animation3.webm";
import gsap from "gsap";
import "../style/HomeSection4.css";

class HomeSection4 extends Component {
  ref1 = createRef();
  ref2 = createRef();
  ref3 = createRef();
  imgContainer = createRef();
  headerRef = createRef();
  bottomImg = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;

    const { section1, section2, section3 } = heights;
    const newHeight = section1 + section2 + section3 + 600;

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

    // bottom image animation
    gsap.fromTo(
      this.bottomImg.current,
      {
        x: "0px",
        width: "100vw",
        height: "100vh",
      },
      {
        x: isDesktop ? "370px" : "280px",
        width: isDesktop ? "960px" : "660px",
        height: isDesktop ? "755px" : "490px",
        y: isDesktop ? "0px" : "-100px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 2250} top`
            : `top+=${newMobileHeight + 2050} top`,
          end: isDesktop
            ? `top+=${newHeight + 2850} top`
            : `top+=${newMobileHeight + 2350} top`,
          toggleActions: "play none none reverse",
          scrub: 0.3,
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
    const { viewType } = this.props;
    return (
      <div className="section-4">
        <video
          className="robot-video"
          width={viewType === "desktop" ? "1100px" : "850px"}
          height={viewType === "desktop" ? "600px" : "440px"}
          autoPlay
          muted
          loop
        >
          <source src={robotVideo} type="video/webm" />
        </video>
        {viewType !== "desktop" && <div style={{ height: "440px" }}></div>}
        <div className="slideshow">
          <img src={ipadFrame} alt="ipad frame" className="frame" />
          <div className="view">
            <div ref={this.imgContainer}>
              <img src={office1} alt="office" className="slide-1" />
              <img src={office2} alt="office" className="slide-2" />
              <img src={office3} alt="office" className="slide-3" />
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <div className="item" ref={this.ref1}>
              <div className="header">Augmented reality</div>
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
              <div className="header">Shoot and edit</div>
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
              <div className="header">TrueDepth camera</div>
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
            <img
              src={office}
              alt="office"
              className="img-1"
              ref={this.bottomImg}
            />
            <div ref={this.headerRef}>
              <div className="header">Performance</div>
              <div className="context">Faster than you can say PC.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection4;
