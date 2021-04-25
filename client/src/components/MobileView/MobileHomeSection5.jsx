import React, { Component } from "react";
import office1 from "../../assets/office1.webp";
import office2 from "../../assets/office2.webp";
import office3 from "../../assets/office3.webp";

class MobileHomeSection5 extends Component {
  render() {
    return (
      <section className="section-5">
        <div className="container-1">
          <div className="header">A12Z Bionic</div>
          <div className="context">
            With the A12Z Bionic chip, iPad Pro is so fast it outpaces most PC
            laptops available today. It makes everything you do fast and fluid,
            from your everyday tasks to graphics-intensive workflows. And the
            8-core graphics processor means even more performance and realism
            for the apps and games where it matters most.
          </div>
        </div>
        <img src={office1} alt="office" className="img-1" ref={this.img1} />
        <img src={office2} alt="office" className="img-2" ref={this.img2} />
        <div className="container-2">
          <div className="header">Pro workflow</div>
          <div className="context">
            A12Z Bionic is designed to be put to work, especially with pro apps.
            The 8‑core graphics processor delivers fluid performance for things
            like 4K video editing, 3D design and augmented reality. Enhanced
            thermal design means higher peak and longer sustained performance —
            critical for pro workflows. And the Apple‑designed Neural Engine
            enables on‑device machine learning ready for the next generation of
            pro apps.
          </div>
        </div>
        <img src={office3} alt="office" className="img-3" ref={this.img3} />
        <img src={office1} alt="office" className="img-4" ref={this.img4} />
        <div className="container-3">
          <div className="header">Multitasking</div>
          <div className="context">
            iPadOS is designed to harness the power and performance of iPad Pro.
            Lightning‑fast hardware and powerful software were designed in
            concert to make every interaction snappy and smooth. Which makes
            working with multiple apps at once, and moving between spaces, quick
            and effortless.
          </div>
        </div>

        <img src={office3} alt="office" className="img-5" ref={this.img5} />
      </section>
    );
  }
}

export default MobileHomeSection5;
