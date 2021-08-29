import React, { Component } from "react";
import shipImg from "../../assets/shipImg.webp";
import officeImg from "../../assets/office2.webp";
import gifH from "../../assets/web gif webm/H.webm";
import gifI from "../../assets/web gif webm/I.webm";
class MobileHomeSection8 extends Component {
  render() {
    return (
      <section className="section-8">
        <div className="container-1">
          <video autoPlay loop muted>
            <source src={gifH} type="video/webm" />
          </video>
          <div>
            <div className="header">Take notes</div>
            <div className="context">
              iPad is perfect for taking notes and organising your thoughts.
              Sketch ideas in the Notes app as naturally as you do on paper,
              then catalogue them, share them or add them to a presentation. You
              can even search your handwritten notes. The App Store is also full
              of great apps that let you organise, annotate and take your notes
              to the next level.
            </div>
          </div>
        </div>
        <div className="container-2">
          <video className="gif-I" autoPlay loop muted>
            <source src={gifI} type="video/webm" />
          </video>
          <div>
            <div className="header">Markup</div>
            <div className="context">
              Marking things up with Apple Pencil is a great way to get stuff
              done. Take a screenshot, then mark it up. Scan a document, then
              sign it on your iPad. You can also easily mark up and send a PDF,
              and even draw directly in apps like Keynote.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileHomeSection8;
