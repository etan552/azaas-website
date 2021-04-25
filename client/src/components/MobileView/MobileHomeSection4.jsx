import React, { Component } from "react";
import office from "../../assets/office.webp";
import office1 from "../../assets/mobileOffice1.webp";
import office2 from "../../assets/mobileOffice2.webp";
import office3 from "../../assets/mobileOffice3.webp";

class MobileHomeSection4 extends Component {
  render() {
    return (
      <div className="section-4">
        <img src={office} alt="office" className="office-img" />
        <div className="content">
          <div>
            <div className="item">
              <div className="header">Augmented reality</div>
              <div className="context">
                On the new iPad Pro, AR apps become even more realistic. Placing
                an AR object now happens instantly. Realistic object occlusion
                allows AR objects to pass in front of and behind real-world
                structures. Improved motion capture and people occlusion are
                more accurate than ever. And developers will be able to create
                even more immersive experiences.
              </div>
              <img src={office1} alt="office" className="slide-1" />
            </div>
            <div className="item" ref={this.ref2}>
              <div className="header">Shoot and edit</div>
              <div className="context">
                The pro camera system makes iPad Pro incredibly versatile.
                Shoot, edit and share a 4K video, all on the same device.
                Capture an entire room in one shot with the Ultra Wide camera
                and use Markup to redesign it on the spot. Or scan a document,
                sign or mark it up with Apple Pencil, then send back your notes
                with a tap.
              </div>
              <img src={office2} alt="office" className="slide-2" />
            </div>
            <div className="item" ref={this.ref3}>
              <div className="header">TrueDepth camera</div>
              <div className="context">
                The front-facing TrueDepth camera enables Face ID, the world’s
                most secure facial authentication in a tablet — and in a
                computer. It also means you can chat with friends using
                FaceTime, take Portrait selfies or liven up your Messages
                conversations by turning yourself into an Animoji.
              </div>
              <img src={office3} alt="office" className="slide-3" />
            </div>
          </div>

          <div className="container-1">
            <div>
              <div className="header">Performance</div>
              <div className="context">Faster than you can say PC.</div>
            </div>
            <div>
              <img src={office} alt="office" className="img-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileHomeSection4;
