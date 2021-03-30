import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import shipImg from "../assets/shipImg.png";
import "../style/Home.css";

class HomeSection2 extends Component {
  section2Ref = createRef();
  section2Img = createRef();
  section2Container1 = createRef();
  section2Container2 = createRef();
  section2Container3 = createRef();

  componentDidMount() {
    // animation for section 2's Ipad img
    TweenMax.fromTo(
      this.section2Img.current,
      { width: "900px", y: "80vh" },
      {
        duration: 1,
        width: "500px",
        y: "-10vh",
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=2000px center",
          end: "bottom+=2500px center",
          scrub: 1,
        },
      }
    );

    TweenMax.fromTo(
      this.section2Img.current,
      { width: "100vw", y: "0px" },
      {
        duration: 1,
        width: "900px",
        y: "80vh",
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=600px center",
          end: "bottom+=1400px center",
          scrub: 1,
        },
      }
    );

    // animation for section 2's container-1
    gsap.to(this.section2Container1.current, {
      duration: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: this.props.section1Ref.current,
        start: "bottom+=500px center",
        end: "bottom+=500px center",
        toggleActions: "play none none reverse",
      },
    });

    //animation for section 2's container-2 fade in
    gsap.to(
      this.section2Container2.current,

      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=1400px center",
          end: "bottom+=1400px center",
          toggleActions: "play none none reverse",
        },
      }
    );

    //animation for section 2's container-2 fade out
    gsap.fromTo(
      this.section2Container2.current,
      { opacity: 1 },
      {
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=1800px center",
          end: "bottom+=1800px center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // animation for section 2' container-3 fade in
    gsap.to(
      this.section2Container3.current,

      {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=2500px center",
          end: "bottom+=2500px center",
          toggleActions: "play none none reverse",
        },
      }
    );

    //animation for section 2's container-3 fade out
    gsap.fromTo(
      this.section2Container3.current,
      { opacity: 1 },
      {
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: this.props.section1Ref.current,
          start: "bottom+=2900px center",
          end: "bottom+=2900px center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    return (
      <section className="section-2" ref={this.section2Ref}>
        {/* <div className="shipImg" ref={this.section2Img}></div> */}
        <img
          className="shipImg"
          src={shipImg}
          alt="shigImg"
          ref={this.section2Img}
        />
        <div className="container-1" ref={this.section2Container1}>
          <h1 className="header">Liquid Retina display</h1>
          <div className="context">
            Try to find a more
            <br /> advanced mobile display.
            <br />
            We'll wait.
          </div>
        </div>

        <div className="container-2" ref={this.section2Container2}>
          <h1 className="header">Liquid Retina technology</h1>
          <div className="context">
            The edge-to-edge Liquid Retina display is not only gorgeous and
            immersive, but also features incredibly advanced technologies.1 Like
            ProMotion, True Tone and industry‑leading colour accuracy, which
            make everything feel responsive and look stunning. Quite simply,
            this combination of features makes it the world’s most advanced
            mobile display.
          </div>
        </div>

        <div className="container-3" ref={this.section2Container3}>
          <div className="left">
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">Industry-leading colour accuracy</h3>
            </div>
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">ProMotion</h3>
            </div>
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">600 Nits brightness</h3>
            </div>
          </div>
          <div className="right">
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">Ultra-low reflectivity</h3>
            </div>
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">True tone</h3>
            </div>
            <div className="icon">
              <img src="" alt="" className="icon-img" />
              <h3 className="header">P3 wide colour gamut</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection2;
