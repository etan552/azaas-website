import React, { Component } from "react";

import "../../style/Home.css";
import MobileHomeSection1 from "./MobileHomeSection1";
import MobileHomeSection2 from "./MobileHomeSection2";
import MobileHomeSection3 from "./MobileHomeSection3";
import MobileHomeSection4 from "./MobileHomeSection4";
import MobileHomeSection5 from "./MobileHomeSection5";
import MobileHomeSection6 from "./MobileHomeSection6";
import MobileHomeSection7 from "./MobileHomeSection7";
import MobileHomeSection8 from "./MobileHomeSection8";
import MobileHomeSection9 from "./MobileHomeSection9";
import MobileHomeSection10 from "./MobileHomeSection10";
import MobileHomeSection11 from "./MobileHomeSection11";

class MobileHome extends Component {
  render() {
    return (
      <div className="home">
        <MobileHomeSection1 />
        <MobileHomeSection2 />
        <MobileHomeSection3 />
        <MobileHomeSection4 />
        <MobileHomeSection5 />
        <MobileHomeSection6 />
        <MobileHomeSection7 />
        <MobileHomeSection8 />
        <MobileHomeSection9 />
        <MobileHomeSection10 />
        <MobileHomeSection11 />
      </div>
    );
  }
}

export default MobileHome;
