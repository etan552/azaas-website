import React, { Component } from "react";
import office from "../../assets/office.webp";
import gifF from "../../assets/web gif webm/F.webm";
import gifJ from "../../assets/web gif webm/J.webm";
import gifG from "../../assets/web gif webm/G.webm";
import algorithm from "../../assets/mobile/section4/algo.webm";

class MobileHomeSection4 extends Component {
  render() {
    return (
      <div className="section-4">
        <video className="algorithm" autoPlay loop muted>
          <source src={algorithm} type="video/webm" />
        </video>
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
              <video className="gif-F" autoPlay loop muted>
                <source src={gifF} type="video/webm" />
              </video>
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
              <video className="gif-J" autoPlay loop muted>
                <source src={gifJ} type="video/webm" />
              </video>
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
              <video className="gif-G" autoPlay loop muted>
                <source src={gifG} type="video/webm" />
              </video>
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
