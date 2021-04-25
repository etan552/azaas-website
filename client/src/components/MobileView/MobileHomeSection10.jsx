import React, { Component } from "react";
import abstract from "../../assets/abstract.webp";
import phone from "../../assets/abstractPhone.webp";

class MobileHomeSection10 extends Component {
  render() {
    return (
      <section className="section-10">
        <div className="container-1">
          <div className="notes">
            <p ref={this.note1}>WIFI 6</p>
            <p ref={this.note2}>Gigabit-class lte</p>
            <p ref={this.note3}>usb-c port</p>
            <p ref={this.note4}>four speaker audio</p>
          </div>
          <img src={abstract} alt="abstract" className="img" />
        </div>
        <div className="container-2">
          <div>
            <div className="header">
              Use AR to see the
              <br /> new iPad.
            </div>
            <div className="context">
              Open this page using Safari on your iPhone or iPad.
            </div>
          </div>
          <img src={phone} alt="phone" className="phone-img" />
        </div>
      </section>
    );
  }
}

export default MobileHomeSection10;
