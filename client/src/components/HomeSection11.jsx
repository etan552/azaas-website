import React, { Component } from "react";
import "../style/HomeSection11.css";
import video from "../assets/footerVideo.webm";

class HomeSection11 extends Component {
  render() {
    return (
      <section className="section-11">
        <div className="text">
          <div className="header">
            aZaaS help technology founders plan and execute a successful exit
          </div>
          <div className="content">
            We do this through our proven strategic framework, doing the heavy
            lifting on the transaction and running a competitive process to
            maximise value
          </div>
        </div>
        <video autoPlay loop muted>
          <source src={video} type="video/webm" />
        </video>
      </section>
    );
  }
}

export default HomeSection11;
