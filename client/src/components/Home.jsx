import React, { Component, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import "../style/Home.css";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  section1Ref = createRef();
  homeRef = createRef();

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // window.onbeforeunload =  () => {
  //   window.scrollTo(0, 0);
  // };

  render() {
    return (
      <div className="home" ref={this.homeRef}>
        <HomeSection1 section1Ref={this.section1Ref} />
        <div style={{ height: "7000px" }}></div>
        <HomeSection2
          section1Ref={this.section1Ref}
          homeRef={this.homeRef.current}
        />
      </div>
    );
  }
}

export default Home;
