import React, { Component, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import "../style/Home.css";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";
import HomeSection3 from "./HomeSection3";

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  homeRef = createRef();

  render() {
    const { viewType } = this.props;
    return (
      <div className="home" ref={this.homeRef}>
        <HomeSection1 viewType={viewType} />
        <HomeSection3 />
        <HomeSection2 homeRef={this.homeRef.current} viewType={viewType} />
      </div>
    );
  }
}

export default Home;
