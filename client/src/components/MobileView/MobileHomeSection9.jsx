import React, { Component } from "react";
import robotHand from "../../assets/mobile/section9/robotHand.webp";
import office from "../../assets/mobileOffice2.webp";
import edgeGif from "../../assets/mobile/section9/edge.webm";

class MobileHomeSection9 extends Component {
  render() {
    return (
      <section className="section-9">
        <video className="edge" autoPlay loop muted>
          <source src={edgeGif} type="video/webm" />
        </video>
        <div className="container-1">
          <div className="inner-1">
            <div className="header">Portability</div>
            <div className="context">
              Goes where no laptop
              <br /> would dare.
            </div>
          </div>
          <img
            src={robotHand}
            alt="hand holding an ipad"
            className="robot-hand"
          />
          <div className="inner-2">
            <div className="header" ref={this.header1}>
              Thin, light and durable
            </div>
            <div className="context" ref={this.context1}>
              iPad Pro is incredibly capable while still being easy to carry
              with you everywhere — slip it into a backpack or rest it on a tray
              table. And it has up to 10 hours of battery life to keep you going
              all day.3
            </div>
            <div className="notes">
              <p ref={this.notes1}>Just over a pound</p>
              <p ref={this.notes2}>All-day batteries</p>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="header">Connectivity</div>
          <div className="context">
            iPad Pro is the ultimate mobile workstation. You can print, project
            and send files wirelessly. The USB‑C port lets you connect all types
            of accessories, like a camera, external drive or display. Wi‑Fi and
            LTE are faster than ever, so you can stay connected everywhere.4 And
            when it’s time to stream your favourite show or listen to your party
            playlist, iPad Pro has an amazing four speaker audio system built
            in.
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection9;
