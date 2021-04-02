import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import shipImg from "../../assets/shipImg.png";
import "../../style/HomeSection2.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

class HomeSection2 extends Component {
  section2Img = createRef();

  componentDidMount() {
    // animation for section 2's Ipad img
    TweenMax.fromTo(
      this.section2Img.current,
      { width: "110vh", y: "70vh" },
      {
        width: "500px",
        bottom: "50%",
        y: "50%",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=3200px center",
          end: "top+=4200px center",
          // toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      { width: "100vw", y: "0px" },
      {
        duration: 1,
        width: "110vh",
        y: "70vh",
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=2100px center",
          end: "top+=3200px center",
          // toggleActions: "play none none reverse",

          scrub: true,
        },
      }
    );

    TweenMax.to(this.section2Img.current, {
      duration: 0.5,
      x: "230px",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=4400 center",
        end: "top+=5000 center",
        toggleActions: "play none none reverse",
        scrub: 0.5,
      },
    });
  }

  render() {
    return (
      <section className="section-2">
        <img
          className="shipImg"
          src={shipImg}
          alt="shigImg"
          ref={this.section2Img}
        />
        <Container1 homeRef={this.props.homeRef} />
        <Container2 homeRef={this.props.homeRef} />
        <Container3 homeRef={this.props.homeRef} />
        <Container4 homeRef={this.props.homeRef} />
      </section>
    );
  }
}

export default HomeSection2;
