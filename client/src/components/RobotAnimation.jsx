import React, { Component, createRef } from "react";
import "../style/RobotAnimation.css";
import gsap from "gsap";
import robot1 from "../assets/robot4webp/000.webp";
import robot2 from "../assets/robot4webp/000.webp";
import robot3 from "../assets/robot4webp/000.webp";
import robot4 from "../assets/robot4webp/000.webp";
import robot5 from "../assets/robot4webp/000.webp";
import robot6 from "../assets/robot4webp/000.webp";
import robot7 from "../assets/robot4webp/000.webp";
import robot8 from "../assets/robot4webp/000.webp";
import robot9 from "../assets/robot4webp/000.webp";
import robot10 from "../assets/robot4webp/000.webp";
import robot11 from "../assets/robot4webp/000.webp";
import robot12 from "../assets/robot4webp/000.webp";
import robot13 from "../assets/robot4webp/000.webp";
import robot14 from "../assets/robot4webp/000.webp";
import robot15 from "../assets/robot4webp/000.webp";
import robot16 from "../assets/robot4webp/000.webp";
import robot17 from "../assets/robot4webp/000.webp";
import robot18 from "../assets/robot4webp/000.webp";
import robot19 from "../assets/robot4webp/000.webp";
import robot20 from "../assets/robot4webp/000.webp";
import robot21 from "../assets/robot4webp/000.webp";
import robot22 from "../assets/robot4webp/000.webp";
import robot23 from "../assets/robot4webp/000.webp";
import robot24 from "../assets/robot4webp/000.webp";
import robot25 from "../assets/robot4webp/000.webp";
import robot26 from "../assets/robot4webp/000.webp";
import robot27 from "../assets/robot4webp/000.webp";
import robot28 from "../assets/robot4webp/000.webp";
import robot29 from "../assets/robot4webp/000.webp";
import robot30 from "../assets/robot4webp/000.webp";
import robot31 from "../assets/robot4webp/000.webp";
import robot32 from "../assets/robot4webp/000.webp";
import robot33 from "../assets/robot4webp/000.webp";
import robot34 from "../assets/robot4webp/000.webp";
import robot35 from "../assets/robot4webp/000.webp";
import robot36 from "../assets/robot4webp/000.webp";
import robot37 from "../assets/robot4webp/000.webp";
import robot38 from "../assets/robot4webp/000.webp";
import robot39 from "../assets/robot4webp/000.webp";
import robot40 from "../assets/robot4webp/000.webp";
import robot41 from "../assets/robot4webp/000.webp";
import robot42 from "../assets/robot4webp/000.webp";
import robot43 from "../assets/robot4webp/000.webp";
import robot44 from "../assets/robot4webp/000.webp";
import robot45 from "../assets/robot4webp/000.webp";
import robot46 from "../assets/robot4webp/000.webp";
import robot47 from "../assets/robot4webp/000.webp";
import robot48 from "../assets/robot4webp/000.webp";
import robot49 from "../assets/robot4webp/000.webp";
import robot50 from "../assets/robot4webp/050.webp";
import robot51 from "../assets/robot4webp/051.webp";
import robot52 from "../assets/robot4webp/052.webp";
import robot53 from "../assets/robot4webp/053.webp";
import robot54 from "../assets/robot4webp/054.webp";
import robot55 from "../assets/robot4webp/055.webp";
import robot56 from "../assets/robot4webp/056.webp";
import robot57 from "../assets/robot4webp/057.webp";
import robot58 from "../assets/robot4webp/058.webp";
import robot59 from "../assets/robot4webp/059.webp";
import robot60 from "../assets/robot4webp/060.webp";
import robot61 from "../assets/robot4webp/061.webp";
import robot62 from "../assets/robot4webp/062.webp";
import robot63 from "../assets/robot4webp/063.webp";
import robot64 from "../assets/robot4webp/064.webp";
import robot65 from "../assets/robot4webp/065.webp";
import robot66 from "../assets/robot4webp/066.webp";
import robot67 from "../assets/robot4webp/067.webp";
import robot68 from "../assets/robot4webp/068.webp";
import robot69 from "../assets/robot4webp/069.webp";
import robot70 from "../assets/robot4webp/070.webp";
import robot71 from "../assets/robot4webp/071.webp";
import robot72 from "../assets/robot4webp/072.webp";
import robot73 from "../assets/robot4webp/073.webp";
import robot74 from "../assets/robot4webp/074.webp";
import robot75 from "../assets/robot4webp/075.webp";
import robot76 from "../assets/robot4webp/076.webp";
import robot77 from "../assets/robot4webp/077.webp";
import robot78 from "../assets/robot4webp/078.webp";
import robot79 from "../assets/robot4webp/079.webp";
import robot80 from "../assets/robot4webp/080.webp";
import robot81 from "../assets/robot4webp/081.webp";
import robot82 from "../assets/robot4webp/082.webp";
import robot83 from "../assets/robot4webp/083.webp";
import robot84 from "../assets/robot4webp/084.webp";
import robot85 from "../assets/robot4webp/000.webp";
import robot86 from "../assets/robot4webp/000.webp";
import robot87 from "../assets/robot4webp/000.webp";
import robot88 from "../assets/robot4webp/000.webp";
import robot89 from "../assets/robot4webp/000.webp";
import robot90 from "../assets/robot4webp/000.webp";
import robot91 from "../assets/robot4webp/000.webp";
import robot92 from "../assets/robot4webp/000.webp";
import robot93 from "../assets/robot4webp/000.webp";
import robot94 from "../assets/robot4webp/000.webp";
import robot95 from "../assets/robot4webp/000.webp";
import robot96 from "../assets/robot4webp/000.webp";
import robot97 from "../assets/robot4webp/000.webp";
import robot98 from "../assets/robot4webp/000.webp";
import robot99 from "../assets/robot4webp/000.webp";
import robot100 from "../assets/robot4webp/000.webp";
import robot101 from "../assets/robot4webp/000.webp";
import robot102 from "../assets/robot4webp/000.webp";
import robot103 from "../assets/robot4webp/000.webp";
import robot104 from "../assets/robot4webp/000.webp";
import robot105 from "../assets/robot4webp/000.webp";
import robot106 from "../assets/robot4webp/000.webp";
import robot107 from "../assets/robot4webp/000.webp";
import robot108 from "../assets/robot4webp/000.webp";
import robot109 from "../assets/robot4webp/000.webp";
import robot110 from "../assets/robot4webp/000.webp";
import robot111 from "../assets/robot4webp/000.webp";
import robot112 from "../assets/robot4webp/000.webp";
import robot113 from "../assets/robot4webp/000.webp";
import robot114 from "../assets/robot4webp/000.webp";
import robot115 from "../assets/robot4webp/000.webp";
import robot116 from "../assets/robot4webp/000.webp";
import robot117 from "../assets/robot4webp/000.webp";
import robot118 from "../assets/robot4webp/000.webp";
import robot119 from "../assets/robot4webp/000.webp";
import robot120 from "../assets/robot4webp/000.webp";
import robot121 from "../assets/robot4webp/000.webp";
import robot122 from "../assets/robot4webp/000.webp";
import robot123 from "../assets/robot4webp/000.webp";
import robot124 from "../assets/robot4webp/000.webp";
import robot125 from "../assets/robot4webp/000.webp";
import robot126 from "../assets/robot4webp/000.webp";
import robot127 from "../assets/robot4webp/000.webp";
import RobotAnimation2 from "./RobotAnimation2";

class RobotAnimation extends Component {
  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  // componentDidUpdate() {
  //   const { heights, viewType } = this.props;
  //   const { section1 } = heights;
  //   const newHeight = section1;

  //   const frameCount = 115;
  //   const html = document.documentElement;
  //   const context = this.canvas.current.getContext("2d");

  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = this.getCurrentImg(i);
  //   }

  //   // painting the first frame
  //   const img = new Image();
  //   img.src = this.getCurrentImg(1);
  //   this.canvas.current.width = 400;
  //   this.canvas.current.height = 1200;
  //   img.onload = function () {
  //     context.drawImage(img, 0, 0);
  //   };

  //   // window.addEventListener("scroll  ", this.handleScrolling);
  //   window.addEventListener("scroll", () => {
  //     const scrollTop = html.scrollTop - (viewType === "desktop" ? 2700 : 2500);
  //     const maxScrollTop = 5000 - window.innerHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const frameIndex = Math.min(
  //       frameCount - 1,
  //       Math.floor(scrollFraction < 0 ? 0 : scrollFraction * frameCount)
  //     );

  //     requestAnimationFrame(() => this.updateImg(frameIndex + 1, context, img));
  //   });
  // }

  updateImg = (index, context, img) => {
    img.src = this.getCurrentImg(index);
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  };

  getCurrentImg = (index) => {
    switch (index) {
      case 1:
        return robot1;

      case 2:
        return robot2;

      case 3:
        return robot3;

      case 4:
        return robot4;

      case 5:
        return robot5;

      case 6:
        return robot6;

      case 7:
        return robot7;

      case 8:
        return robot8;

      case 9:
        return robot9;

      case 10:
        return robot10;

      case 11:
        return robot11;

      case 12:
        return robot12;

      case 13:
        return robot13;

      case 14:
        return robot14;

      case 15:
        return robot15;

      case 16:
        return robot16;

      case 17:
        return robot17;

      case 18:
        return robot18;

      case 19:
        return robot19;

      case 20:
        return robot20;

      case 21:
        return robot21;

      case 22:
        return robot22;

      case 23:
        return robot23;

      case 24:
        return robot24;

      case 25:
        return robot25;

      case 26:
        return robot26;

      case 27:
        return robot27;

      case 28:
        return robot28;

      case 29:
        return robot29;

      case 30:
        return robot30;

      case 31:
        return robot31;

      case 32:
        return robot32;

      case 33:
        return robot33;

      case 34:
        return robot34;

      case 35:
        return robot35;

      case 36:
        return robot36;

      case 37:
        return robot37;

      case 38:
        return robot38;

      case 39:
        return robot39;

      case 40:
        return robot40;

      case 41:
        return robot41;

      case 42:
        return robot42;

      case 43:
        return robot43;

      case 44:
        return robot44;

      case 45:
        return robot45;

      case 46:
        return robot46;

      case 47:
        return robot47;

      case 48:
        return robot48;

      case 49:
        return robot49;

      case 50:
        return robot50;

      case 51:
        return robot51;

      case 52:
        return robot52;

      case 53:
        return robot53;

      case 54:
        return robot54;

      case 55:
        return robot55;

      case 56:
        return robot56;

      case 57:
        return robot57;

      case 58:
        return robot58;

      case 59:
        return robot59;

      case 60:
        return robot60;

      case 61:
        return robot61;

      case 62:
        return robot62;

      case 63:
        return robot63;

      case 64:
        return robot64;

      case 65:
        return robot65;

      case 66:
        return robot66;

      case 67:
        return robot67;

      case 68:
        return robot68;

      case 69:
        return robot69;

      case 70:
        return robot70;

      case 71:
        return robot71;

      case 72:
        return robot72;

      case 73:
        return robot73;

      case 74:
        return robot74;

      case 75:
        return robot75;

      case 76:
        return robot76;

      case 77:
        return robot77;

      case 78:
        return robot78;

      case 79:
        return robot79;

      case 80:
        return robot80;

      case 81:
        return robot81;

      case 82:
        return robot82;

      case 83:
        return robot83;

      case 84:
        return robot84;

      case 85:
        return robot85;

      case 86:
        return robot86;

      case 87:
        return robot87;

      case 88:
        return robot88;

      case 89:
        return robot89;

      case 90:
        return robot90;

      case 91:
        return robot91;

      case 92:
        return robot92;

      case 93:
        return robot93;

      case 94:
        return robot94;

      case 95:
        return robot95;

      case 96:
        return robot96;

      case 97:
        return robot97;

      case 98:
        return robot98;

      case 99:
        return robot99;

      case 100:
        return robot100;

      case 100:
        return robot100;

      case 101:
        return robot101;

      case 102:
        return robot102;

      case 103:
        return robot103;

      case 104:
        return robot104;

      case 105:
        return robot105;

      case 106:
        return robot106;

      case 107:
        return robot107;

      case 108:
        return robot108;

      case 109:
        return robot109;

      case 110:
        return robot110;

      case 111:
        return robot111;

      case 112:
        return robot112;

      case 113:
        return robot113;

      case 114:
        return robot114;

      case 115:
        return robot115;

      case 116:
        return robot116;

      case 117:
        return robot117;

      case 118:
        return robot118;

      case 119:
        return robot119;

      case 120:
        return robot120;

      case 121:
        return robot121;

      case 122:
        return robot122;

      case 123:
        return robot123;

      case 124:
        return robot124;

      case 125:
        return robot125;

      case 126:
        return robot126;

      case 127:
        return robot127;

      default:
        break;
    }
  };

  render() {
    const { viewType, heights, homeRef } = this.props;
    return (
      <React.Fragment>
        <div className="robot-2">
          {/* <div className="img-container"></div> */}
          {/* <canvas ref={this.canvas}></canvas> */}
          <RobotAnimation2
            viewType={viewType}
            heights={heights}
            homeRef={homeRef}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RobotAnimation;
