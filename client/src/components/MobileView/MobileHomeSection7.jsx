import React, { Component } from "react";
import robot from "../../assets/mobile/section7/robot.webp";
import robot1 from "../../assets/mobile/section7/robot1.webp";
import dataGif from "../../assets/mobile/section7/data.webm";

class MobileHomeSection7 extends Component {
  render() {
    return (
      <section className="section-7">
        <div className="top">
          {/* White robot */}
          <img src={robot} alt="office" className="robot" />
          <div className="container-2">
            <div className="header">Trackpad reimagined</div>
            <div className="context">
              The click-anywhere trackpad opens up a whole new way to work in
              iPadOS. It allows control of the new cursor in iPadOS, which is
              perfect for tasks like editing a spreadsheet, selecting text or
              simply doing everything directly from the trackpad. And you can
              navigate fluidly with familiar Multi‑Touch gestures, like swiping
              to go Home and switching between spaces.
            </div>
          </div>

          {/* Dark robot */}
          <img src={robot1} alt="office" className="robot-1" />
          <div className="container-1">
            <div className="header">Full‑sized keyboard</div>
            <div className="context">
              A full-sized keyboard designed for iPad Pro brings individual hard
              key caps and a scissor mechanism with 1 millimetre of travel for a
              responsive, comfortable and quiet typing experience. So go ahead;
              write your novel, knock out a business plan or rip through your
              inbox. And with backlit keys, you can get things done day or
              night.
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container-3">
            <div className="header">Cursor for iPadOS</div>
            <div className="context">
              The biggest thing to happen to the cursor since point and click.
            </div>
          </div>
          <video className="data-intelligence-mobile" autoPlay loop muted>
            <source src={dataGif} type="video/webm" />
          </video>

          <div className="container-4" ref={this.container4Ref}>
            <div className="header">Trackpad for iPadOS</div>
            <div className="context">
              Trackpad support opens up powerful new ways to use your iPad. The
              reimagined cursor experience has been designed specifically to
              work in a touch‑first environment. It’s contextual, so it
              transforms into the tool you need depending on the content you’re
              pointing to, like buttons, app icons and text. It’s perfect for
              tasks where you need an extra level of precision, like building a
              spreadsheet or editing text. You can also use intuitive trackpad
              gestures to quickly get around in iPadOS.
            </div>
          </div>
          <div className="container-5 notes">
            <div>Appear when you need it</div>
            <div className="text-1">Easily select and formats text</div>
            <div className="text-2">intelligently adapts to content</div>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection7;
