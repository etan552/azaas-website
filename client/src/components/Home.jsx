import React, { Component, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import "../style/Home.css";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  section1Ref = createRef();

  render() {
    return (
      <div className="home">
        <HomeSection1 section1Ref={this.section1Ref} />
        <div style={{ height: "400vh" }}></div>
        <HomeSection2 section1Ref={this.section1Ref} />
      </div>
    );
  }
}

export default Home;
