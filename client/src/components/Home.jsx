import React, { Component, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import "../style/Home.css";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "",
      desktop: 1070,
      tablet: 750,
    };
    let todo;
  }

  section1Ref = createRef();
  homeRef = createRef();

  componentDidMount() {
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
    window.addEventListener("resize", this.checkWindowType);
  }

  checkWindowType = () => {
    clearTimeout(this.todo);
    this.todo = setTimeout(() => {
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
      window.scrollTo(0, 0);
      window.location.reload();
    }, 250);
  };

  // window.onbeforeunload =  () => {
  //   window.scrollTo(0, 0);
  // };

  render() {
    console.log(1);
    const { viewType } = this.state;
    return (
      <div className="home" ref={this.homeRef}>
        <HomeSection1 section1Ref={this.section1Ref} viewType={viewType} />
        <div style={{ height: "7000px" }}></div>
        <HomeSection2
          section1Ref={this.section1Ref}
          homeRef={this.homeRef.current}
          viewType={viewType}
        />
      </div>
    );
  }
}

export default Home;
