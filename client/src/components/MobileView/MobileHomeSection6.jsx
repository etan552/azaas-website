import React, { Component } from "react";
import laptop from "../../assets/floatingKeyboard.webp";

class MobileHomeSection6 extends Component {
  render() {
    return (
      <section className="section-6">
        <div className="container-1">
          <div className="header">Magic Keyboard</div>
          <div className="context">Yes, it floats.</div>
        </div>
        <div className="img-container">
          <img src={laptop} alt="laptop" className="img-1" />
          <div className="notes">
            <p className="note1" ref={this.note1}>
              Attaches magnetically
            </p>
            <p className="note2" ref={this.note2}>
              floating design
            </p>
          </div>
        </div>
        <div className="container-2">
          <div className="header">Magic Keyboard</div>
          <div className="context">
            The all-new Magic Keyboard is an amazing companion for iPad Pro.2 It
            features the best typing experience ever on iPad, a trackpad that
            opens up new ways to work with iPadOS, a USB‑C port for pass-through
            charging, and front and back protection. And it features a floating
            cantilever design, allowing you to attach iPad Pro magnetically, and
            smoothly adjust it to the perfect viewing angle for you.
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection6;
