import React, { Component, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import "../style/Home.css";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import HomeSection8 from "./HomeSection8";
import HomeSection9 from "./HomeSection9";
import HomeSection10 from "./HomeSection10";
import Background from "./Background";

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  state = {
    heights: {
      section1: 2500,
      section2: window.innerHeight + 3600,
      section3: 1818 + 1000 - 200 + (670 - window.innerHeight) / 2,
      section4: 1950,
      section5: 5170,
      section6: 1927,
      section7: window.innerHeight + 5610,
      section8: 2045,
      section9: 1158 + 306 + window.innerHeight / 2,
      mobileHeights: {
        section1m: 2300,
        section2m: window.innerHeight + 3600,
        section3m: 1200,
        section4m: 2310,
        section5m: 3500,
        section6m: 1661,
        section7m: window.innerHeight + 5680,
        section8m: 2045,
        section9m: 1016 + 306 + window.innerHeight / 2,
      },
    },
  };
  homeRef = createRef();

  render() {
    const { viewType } = this.props;
    const { heights } = this.state;

    // console.log(viewType);
    return (
      <div className="home" ref={this.homeRef}>
        <HomeSection1 viewType={viewType} />
        <div style={{ height: "3600px", width: "100%" }}></div>
        <HomeSection3
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <div style={{ height: "1000px" }}></div>
        <HomeSection2
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />

        {/* <Background
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        /> */}
        <HomeSection4
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection5
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection6
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection7
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection8
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection9
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <HomeSection10
          heights={heights}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
        <div style={{ height: "4450px", width: "100%" }}></div>
      </div>
    );
  }
}

export default Home;
