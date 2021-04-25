import React, { Component } from "react";
import "../../style/HomeSection11.css";
import office from "../../assets/mobileOffice2.webp";
import office2 from "../../assets/mobileOffice3.webp";
class MobileHomeSection11 extends Component {
  render() {
    return (
      <section className="section-11">
        <div className="container-1">
          <div className="header">Apple Pencil</div>
          <div className="context">
            Just for artists. And students. And everyone else.
          </div>
          <img src={office} alt="office" className="img-1" />
        </div>
        <div className="container-2">
          <div className="header">Create</div>
          <div className="context">
            Whether you’re retouching a photo or illustrating a birthday card,
            the tilt and pressure sensitivity combined with the low latency of
            Apple Pencil enable all forms of artistic expression.2 And it
            charges while magnetically attached to your iPad Pro, so it’s always
            ready when inspiration strikes.
          </div>
          <div className="notes">
            <div>Attaches magnetically</div>
            <div>Pairs and charges wirelessly</div>
          </div>
          <img src={office2} alt="office" className="img-2" />
        </div>
      </section>
    );
  }
}

export default MobileHomeSection11;
