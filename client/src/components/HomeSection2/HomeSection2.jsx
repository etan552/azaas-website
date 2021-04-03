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

  componentDidUpdate() {
    const { viewType } = this.props;

    // animation for section 2's Ipad img
    TweenMax.fromTo(
      this.section2Img.current,
      {
        width:
          viewType === "desktop"
            ? "110vh"
            : viewType === "tablet"
            ? "600px"
            : "500px",
        y:
          viewType === "desktop"
            ? "70vh"
            : viewType === "tablet"
            ? 280 - window.innerHeight + 710
            : "700px",
        bottom: 0,
      },

      {
        width:
          viewType === "desktop"
            ? "500px"
            : viewType === "tablet"
            ? "450px"
            : "700px",
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
      { width: "100vw", y: "0px" },
      {
        duration: 1,
        width:
          viewType === "desktop"
            ? "110vh"
            : viewType === "tablet"
            ? "600px"
            : "500px",
        y:
          viewType === "desktop"
            ? "70vh"
            : viewType === "tablet"
            ? 280 - window.innerHeight + 710
            : "700px",

        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=2100px center",
          end: "top+=3200px center",
          toggleActions: "play none none reverse",

          scrub: true,
        },
      }
    );

    TweenMax.to(this.section2Img.current, {
      duration: 0.5,
      x:
        viewType === "desktop"
          ? "230px"
          : viewType === "tablet"
          ? "225px"
          : "700px",
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=4400 center",
        end: "top+=5000 center",
        toggleActions: "play none none reverse",
        scrub: 0.5,
      },
    });
  }

  checkWindowType = () => {
    if (window.innerWidth > this.state.desktop) {
      this.setState({ viewType: "desktop" });
    } else if (
      window.innerWidth <= this.state.desktop &&
      window.innerWidth > this.state.tablet
    ) {
      this.setState({ viewType: "tablet" });
    } else {
      this.setState({ viewType: "mobile" });
    }
  };

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
