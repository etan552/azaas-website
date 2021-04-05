import React, { Component, createRef } from "react";
import { TweenMax } from "gsap";
import shipImg from "../../assets/shipImg.webp";
import "../../style/HomeSection2.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

class HomeSection2 extends Component {
  section2Img = createRef();

  componentDidUpdate() {
    const { viewType } = this.props;

    // animation for section 2's Ipad img
    TweenMax.fromTo(
      this.section2Img.current,
      { x: viewType === "desktop" ? "230px" : "210px", y: "50%" },
      {
        x: viewType === "desktop" ? "700px" : "450px",
        y: "75%",
        width: viewType === "desktop" ? "1000px" : "700px",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=5200 center",
          end: "top+=5800 center",
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
          start: "top+=4400 center",
          end: "top+=5000 center",
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
          start: "top+=3400px center",
          end: "top+=4400px center",
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
          start: "top+=2100px center",
          end: "top+=3200px center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  }

  render() {
    const { viewType } = this.props;
    return (
      <section className="section-2">
        <img
          className="shipImg"
          src={shipImg}
          alt="shigImg"
          ref={this.section2Img}
        />
        <Container1 homeRef={this.props.homeRef} viewType={viewType} />
        <Container2 homeRef={this.props.homeRef} viewType={viewType} />
        <Container3 homeRef={this.props.homeRef} viewType={viewType} />
        <Container4 homeRef={this.props.homeRef} viewType={viewType} />
      </section>
    );
  }
}

export default HomeSection2;
