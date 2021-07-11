import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import shipImg from "../../assets/shipImg.webp";
import "../../style/HomeSection2.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import RobotAnimation from "../RobotAnimation";
import robotVideo from "../../assets/animation4.webm";
import robot from "../../assets/robotimg2.webp";
import robot2 from "../../assets/robotimg8.webp";
import algorithm from "../../assets/algorithmAnimation.webm";
import algorithm1 from "../../assets/Algorithm.gif";

class HomeSection2 extends Component {
  section2Img = createRef();
  backgroundRef = createRef();
  gifRef = createRef();
  robotImgRef = createRef();
  robotImg2Ref = createRef();
  robotGifRef = createRef();
  algorithmGif = createRef();

  componentDidUpdate() {
    // const img = new Image();
    // img.src = robot;
    // img.src = robotVideo;

    const { homeRef, heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;
    let isDesktop = viewType === "desktop" ? true : false;
    // animation for section 2's Ipad img
    gsap.fromTo(
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

    gsap.fromTo(
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

    gsap.fromTo(
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

    gsap.fromTo(
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

    gsap.fromTo(
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

    gsap.to(this.gifRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: homeRef,
        start: `top+=${newHeight + 5300} top`,
        // end: `top+=${newHeight + 5200} top`,
        scrub: true,
      },
    });

    gsap.fromTo(
      this.robotGifRef.current,
      {
        minWidth: "100vw",
        height: "100vh",
      },
      {
        minWidth: "20vw",
        height: "20vh",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 50} top`,
          end: `top+=${newHeight + 700} top`,
          scrub: 0.2,
        },
      }
    );

    // robot animations
    gsap.fromTo(
      this.robotImgRef.current,
      {
        height: 64 * window.innerHeight,
        top:
          (5358 / 11768) * window.innerHeight * 64 * -1 +
          0.5 * window.innerHeight,
        // top: "calc((5358 / 11768) * 6400vh * -1 + 50vh)",
        // left: "calc((2218 / 5438) * (5438 / 11768 * 6400vh) * -1 + 50vw)",
        left: 12.0625 * window.innerHeight * -1 + 0.5 * window.innerWidth,
      },
      {
        top: (window.innerHeight - 800) / 2 - 110,
        height: (11768 / 5438) * 532,
        left: 0.5 * window.innerWidth - 275,
        ease: "none",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 200} top`,
          end: `top+=${newHeight + 900} top`,
          scrub: 0.2,
        },
      }
    );

    gsap.fromTo(
      this.robotImgRef.current,
      { visibility: "visible" },
      {
        visibility: "hidden",
        duration: 0.01,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 1000} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      this.robotGifRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 50} top`,
          end: `top+=${newHeight + 700} top`,
          scrub: true,
        },
      }
    );

    // robot 2 animations
    gsap.fromTo(
      this.robotImg2Ref.current,
      {
        top: (window.innerHeight - 800) / 2 - 599,
        height: (11768 / 5438) * 800,
        left: 0.5 * window.innerWidth - 209,
      },
      {
        height: 70 * window.innerHeight,
        top:
          (5702.5 / 11768) * window.innerHeight * 70 * -1 +
          0.5 * window.innerHeight,
        left:
          (2467 / 5438) * (5438 / 11768) * 70 * window.innerHeight * -1 +
          0.5 * window.innerWidth,
        ease: "power2.in",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 4900} top`,
          end: `top+=${newHeight + 5900} top`,
          scrub: 0.2,
        },
      }
    );

    gsap.to(this.robotImg2Ref.current, {
      opacity: 1,
      duration: 0.01,
      scrollTrigger: {
        trigger: homeRef,
        start: `top+=${newHeight + 4900} top`,
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(
      this.robotImg2Ref.current,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.01,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 7500} top`,
          toggleActions: "play none none reverse",
        },
      }
    );

    // algorithm animation

    // increasing width and opacity
    gsap.fromTo(
      this.algorithmGif.current,
      {
        opacity: 0,
        width: "20vw",
      },
      {
        opacity: 1,
        width: "100vw",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 5900} top`,
          end: `top+=${newHeight + 6500} top`,
          toggleActions: "play none none reverse",
          scrub: 0.2,
        },
      }
    );
    // moving downwards
    gsap.fromTo(
      this.algorithmGif.current,
      {
        y: 0,
      },
      {
        y: (window.innerHeight - (981 / 1920) * window.innerWidth) / 2,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 6400} top`,
          end: `top+=${newHeight + 6700} top`,
          toggleActions: "play none none reverse",
          scrub: 0.2,
        },
      }
    );
  }

  render() {
    const { viewType, heights, homeRef } = this.props;
    return (
      <section className="section-2">
        {/* <img
          src={robot}
          alt="robot gif"
          className="robot-gif"
          ref={this.robotGifRef}
        /> */}

        <video className="robot-gif" ref={this.robotGifRef} autoPlay loop muted>
          <source src={robotVideo} type="video/webm" />
        </video>
        <img src={robot} alt="robot" className="robot" ref={this.robotImgRef} />
        <RobotAnimation
          heights={heights}
          homeRef={homeRef}
          viewType={viewType}
        />
        <img
          src={robot2}
          alt="robot2"
          className="robot2"
          ref={this.robotImg2Ref}
        />
        <video
          className="algorithm"
          ref={this.algorithmGif}
          autoPlay
          loop
          muted
        >
          <source src={algorithm} type="video/webm" />
        </video>
        {/* <img
          src={algorithm}
          alt=""
          ref={this.algorithmGif}
          className="algorithm"
        /> */}
        {/* <video
          className="algorithm"
          ref={this.algorithmGif}
          autoPlay
          loop
          muted
        >
          <source src={algorithm} type="video/webm" />
        </video> */}

        {/* <div className="background">
          <div className="background-img" ref={this.backgroundRef}></div>
          <img
            src={robotVideo}
            alt=""
            // style={{ width: "1100px", height: "600px" }}
            className="robot-img"
            ref={this.gifRef}
          />
        </div> */}

        {/* <Container1 homeRef={homeRef} viewType={viewType} heights={heights} /> */}
        <Container2 homeRef={homeRef} viewType={viewType} heights={heights} />
        <Container3 homeRef={homeRef} viewType={viewType} heights={heights} />

        {/* <Container4 homeRef={homeRef} viewType={viewType} heights={heights} /> */}
      </section>
    );
  }
}

export default HomeSection2;
