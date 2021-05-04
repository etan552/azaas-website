import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import shipImg from "../../assets/shipImg.webp";
import "../../style/HomeSection2.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import RobotAnimation from "../RobotAnimation";
import robotVideo from "../../assets/animation3.gif";

class HomeSection2 extends Component {
  section2Img = createRef();
  backgroundRef = createRef();
  gifRef = createRef();

  componentDidUpdate() {
    const { homeRef, heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;
    let isDesktop = viewType === "desktop" ? true : false;
    // animation for section 2's Ipad img
    TweenMax.fromTo(
      this.section2Img.current,
      {
        x: isDesktop ? "700px" : "450px",
        width: isDesktop ? "1000px" : "700px",
        y: "75%",
      },
      {
        x: isDesktop ? "280px" : "270px",
        y: isDesktop ? "550px" : "350px",
        width: isDesktop ? "700px" : "550px",
        scrollTrigger: {
          trigger: homeRef,
          start: isDesktop
            ? `top+=${newHeight + 4854} center` // 6000
            : `top+=${newHeight + 4654} center`,
          end: isDesktop
            ? `top+=${newHeight + 5254} center` // 6400
            : `top+=${newHeight + 5254} center`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      { x: viewType === "desktop" ? "230px" : "210px", y: "50%" },
      {
        x: viewType === "desktop" ? "700px" : "450px",
        y: "75%",
        width: viewType === "desktop" ? "1000px" : "700px",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: `top+=${newHeight + 4054} center`,
          end: `top+=${newHeight + 4654} center`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      { x: "0px" },
      {
        x: viewType === "desktop" ? "230px" : "210px",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: `top+=${newHeight + 3254} center`,
          end: `top+=${newHeight + 3854} center`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      {
        width: viewType === "desktop" ? "110vh" : "600px",
        y: viewType === "desktop" ? "70vh" : 280 - window.innerHeight + 710,
        bottom: 0,
      },
      {
        width: viewType === "desktop" ? "500px" : "420px",
        y: "50%",
        bottom: "50%",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: `top+=${newHeight + 2254} center`,
          end: `top+=${newHeight + 3254} center`,
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      { width: "100vw", y: "0px", bottom: 0 },
      {
        duration: 1,
        width: viewType === "desktop" ? "110vh" : "600px",
        y: viewType === "desktop" ? "70vh" : 280 - window.innerHeight + 710,
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: `top+=${newHeight + 954} center`,
          end: `top+=${newHeight + 2054} center`,
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    TweenMax.fromTo(
      this.backgroundRef.current,
      { backgroundColor: "black" },
      {
        ease: "none",
        backgroundColor: "transparent",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 5300} top`,
          end: `top+=${newHeight + 6000} top`,
          scrub: true,
        },
      }
    );

    TweenMax.fromTo(
      this.backgroundRef.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "black",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 4800} top`,
          end: `top+=${newHeight + 5200} top`,
          scrub: true,
        },
      }
    );

    TweenMax.to(this.gifRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: homeRef,
        start: `top+=${newHeight + 5300} top`,
        // end: `top+=${newHeight + 5200} top`,
        scrub: true,
      },
    });
  }

  render() {
    const { viewType, heights, homeRef } = this.props;
    return (
      <section className="section-2">
        <RobotAnimation
          heights={heights}
          homeRef={homeRef}
          viewType={viewType}
        />
        {/* <img
          className="shipImg"
          src={shipImg}
          alt="shigImg"
          ref={this.section2Img}
        /> */}
        <div className="background">
          <div className="background-img" ref={this.backgroundRef}></div>
          <img
            src={robotVideo}
            alt=""
            // style={{ width: "1100px", height: "600px" }}
            className="robot-img"
            ref={this.gifRef}
          />
        </div>

        <Container1 homeRef={homeRef} viewType={viewType} heights={heights} />
        <Container2 homeRef={homeRef} viewType={viewType} heights={heights} />
        <Container3 homeRef={homeRef} viewType={viewType} heights={heights} />
        {/* <Container4 homeRef={homeRef} viewType={viewType} heights={heights} /> */}
      </section>
    );
  }
}

export default HomeSection2;
