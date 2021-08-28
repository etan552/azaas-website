import React, { Component } from "react";
import "../../style/HomeSection2.css";
import robot from "../../assets/mobile/section2/mSection2Robot.webp";
import robot1 from "../../assets/mobile/section2/mSection2Robot1.webp";
import algorithmGif from "../../assets/mobile/section2/algo.webm";
import blockGif from "../../assets/mobile/section2/block.webm";
import cloudGif from "../../assets/mobile/section2/cloud.webm";
import dataGif from "../../assets/mobile/section2/data.webm";
import edgeGif from "../../assets/mobile/section2/edge.webm";

class MobileHomeSection2 extends Component {
  render() {
    return (
      <section className="section-2">
        <img src={robot1} alt="robot standing" className="robot-1" />

        <div className="container-1">
          <div className="header">Liquid Retina display</div>
          <div className="context">
            Try to find a more advanced mobile display. We’ll wait.
          </div>
        </div>
        <img src={robot} alt="Two robots standing together" className="robot" />
        <div className="container-2">
          <div className="header">Liquid Retina technology</div>
          <div className="context">
            The edge-to-edge Liquid Retina display is not only gorgeous and
            immersive, but also features incredibly advanced technologies.1 Like
            ProMotion, True Tone and industry‑leading colour accuracy, which
            make everything feel responsive and look stunning. Quite simply,
            this combination of features makes it the world’s most advanced
            mobile display.
          </div>
        </div>
        <div className="container-3">
          <div className="layer-1">
            {/* Algo */}
            <div className="icon">
              <video className="algorithms" autoPlay loop muted>
                <source src={algorithmGif} type="video/webm" />
              </video>
              <h3 className="header">Algorithms</h3>
            </div>

            {/* Block */}
            <div className="icon">
              <video className="blockchain" autoPlay loop muted>
                <source src={blockGif} type="video/webm" />
              </video>
              <h3 className="header">Blockchain</h3>
            </div>
          </div>
          <div className="layer-2">
            {/* cloud */}
            <div className="icon">
              <video className="cloud-computing" autoPlay loop muted>
                <source src={cloudGif} type="video/webm" />
              </video>
              <h3 className="header">Cloud Computing</h3>
            </div>

            {/* data */}
            <div className="icon">
              <video className="data-intelligence" autoPlay loop muted>
                <source src={dataGif} type="video/webm" />
              </video>
              <h3 className="header">Data Intelligence</h3>
            </div>
          </div>
          <div className="layer-3">
            {/* Edge */}
            <div className="icon">
              <video className="edge-computing" autoPlay loop muted>
                <source src={edgeGif} type="video/webm" />
              </video>
              <h3 className="header">Edge Computing </h3>
            </div>
          </div>
        </div>
        {/* <div className="container-4">
          <img src={officeImg} alt="office" />
          <img src={shipImg} alt="ship" />
        </div> */}
      </section>
    );
  }
}

export default MobileHomeSection2;
