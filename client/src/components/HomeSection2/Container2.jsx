import React, { Component, createRef } from "react";
import gsap, { TweenMax } from "gsap";
import "../../style/HomeSection2.css";

class Container2 extends Component {
  section2Container2 = createRef();

  componentDidMount() {
    //animation for section 2's container-2 fade in
    TweenMax.to(this.section2Container2.current, {
      duration: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: this.props.homeRef,
        start: "top+=3000px center",
        end: "top+=3000px center",
        toggleActions: "play none none reverse",
      },
    });

    //animation for section 2's container-2 fade out
    TweenMax.fromTo(
      this.section2Container2.current,
      { opacity: 1 },
      {
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: this.props.homeRef,
          start: "top+=3400px center",
          end: "top+=3400px center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  render() {
    return (
      <div className="container-2" ref={this.section2Container2}>
        <h1 className="header">Liquid Retina technology</h1>
        <div className="context">
          The edge-to-edge Liquid Retina display is not only gorgeous and
          immersive, but also features incredibly advanced technologies.1 Like
          ProMotion, True Tone and industry‑leading colour accuracy, which make
          everything feel responsive and look stunning. Quite simply, this
          combination of features makes it the world’s most advanced mobile
          display.
        </div>
      </div>
    );
  }
}

export default Container2;
