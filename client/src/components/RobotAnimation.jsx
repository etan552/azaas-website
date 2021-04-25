import React, { Component, createRef } from "react";
import "../style/RobotAnimation.css";
import gsap from "gsap";
import robot1 from "../assets/robot1/001.webp";
import robot2 from "../assets/robot1/002.webp";
import robot3 from "../assets/robot1/003.webp";
import robot4 from "../assets/robot1/004.webp";
import robot5 from "../assets/robot1/005.webp";
import robot6 from "../assets/robot1/006.webp";
import robot7 from "../assets/robot1/007.webp";
import robot8 from "../assets/robot1/008.webp";
import robot9 from "../assets/robot1/009.webp";
import robot10 from "../assets/robot1/010.webp";
import robot11 from "../assets/robot1/011.webp";
import robot12 from "../assets/robot1/012.webp";
import robot13 from "../assets/robot1/013.webp";
import robot14 from "../assets/robot1/014.webp";
import robot15 from "../assets/robot1/015.webp";
import robot16 from "../assets/robot1/016.webp";
import robot17 from "../assets/robot1/017.webp";
import robot18 from "../assets/robot1/018.webp";
import robot19 from "../assets/robot1/019.webp";
import robot20 from "../assets/robot1/020.webp";
import robot21 from "../assets/robot1/021.webp";
import robot22 from "../assets/robot1/022.webp";
import robot23 from "../assets/robot1/023.webp";
import robot24 from "../assets/robot1/024.webp";
import robot25 from "../assets/robot1/025.webp";
import robot26 from "../assets/robot1/026.webp";
import robot27 from "../assets/robot1/027.webp";
import robot28 from "../assets/robot1/028.webp";
import robot29 from "../assets/robot1/029.webp";
import robot30 from "../assets/robot1/030.webp";
import robot31 from "../assets/robot1/031.webp";
import robot32 from "../assets/robot1/032.webp";
import robot33 from "../assets/robot1/033.webp";
import robot34 from "../assets/robot1/034.webp";
import robot35 from "../assets/robot1/035.webp";
import robot36 from "../assets/robot1/036.webp";
import robot37 from "../assets/robot1/037.webp";
import robot38 from "../assets/robot1/038.webp";
import robot39 from "../assets/robot1/039.webp";
import robot40 from "../assets/robot1/040.webp";
import robot41 from "../assets/robot1/041.webp";
import robot42 from "../assets/robot1/042.webp";
import robot43 from "../assets/robot1/043.webp";
import robot44 from "../assets/robot1/044.webp";
import robot45 from "../assets/robot1/045.webp";
import robot46 from "../assets/robot1/046.webp";
import robot47 from "../assets/robot1/047.webp";
import robot48 from "../assets/robot1/048.webp";
import robot49 from "../assets/robot1/049.webp";
import robot50 from "../assets/robot1/050.webp";
import robot51 from "../assets/robot1/051.webp";
import robot52 from "../assets/robot1/052.webp";
import robot53 from "../assets/robot1/053.webp";
import robot54 from "../assets/robot1/054.webp";
import robot55 from "../assets/robot1/055.webp";
import robot56 from "../assets/robot1/056.webp";
import robot57 from "../assets/robot1/057.webp";
import robot58 from "../assets/robot1/058.webp";
import robot59 from "../assets/robot1/059.webp";
import robot60 from "../assets/robot1/060.webp";
import robot61 from "../assets/robot1/061.webp";
import robot62 from "../assets/robot1/062.webp";
import robot63 from "../assets/robot1/063.webp";
import robot64 from "../assets/robot1/064.webp";
import robot65 from "../assets/robot1/065.webp";
import robot66 from "../assets/robot1/066.webp";
import robot67 from "../assets/robot1/067.webp";
import robot68 from "../assets/robot1/068.webp";
import robot69 from "../assets/robot1/069.webp";
import robot70 from "../assets/robot1/070.webp";
import robot71 from "../assets/robot1/071.webp";
import robot72 from "../assets/robot1/072.webp";
import robot73 from "../assets/robot1/073.webp";
import robot74 from "../assets/robot1/074.webp";
import robot75 from "../assets/robot1/075.webp";
import robot76 from "../assets/robot1/076.webp";
import robot77 from "../assets/robot1/077.webp";
import robot78 from "../assets/robot1/078.webp";
import robot79 from "../assets/robot1/079.webp";
import robot80 from "../assets/robot1/080.webp";
import robot81 from "../assets/robot1/081.webp";
import robot82 from "../assets/robot1/082.webp";
import robot83 from "../assets/robot1/083.webp";
import robot84 from "../assets/robot1/084.webp";
import robot85 from "../assets/robot1/085.webp";
import robot86 from "../assets/robot1/086.webp";
import robot87 from "../assets/robot1/087.webp";
import robot88 from "../assets/robot1/088.webp";
import robot89 from "../assets/robot1/089.webp";
import robot90 from "../assets/robot1/090.webp";
import robot91 from "../assets/robot1/091.webp";
import robot92 from "../assets/robot1/092.webp";
import robot93 from "../assets/robot1/093.webp";
import robot94 from "../assets/robot1/094.webp";
import robot95 from "../assets/robot1/095.webp";
import robot96 from "../assets/robot1/096.webp";
import robot97 from "../assets/robot1/097.webp";
import robot98 from "../assets/robot1/098.webp";
import robot99 from "../assets/robot1/099.webp";
import robot100 from "../assets/robot1/100.webp";
import robot101 from "../assets/robot1/101.webp";
import robot102 from "../assets/robot1/102.webp";
import robot103 from "../assets/robot1/103.webp";
import robot104 from "../assets/robot1/104.webp";
import robot105 from "../assets/robot1/105.webp";
import robot106 from "../assets/robot1/106.webp";
import robot107 from "../assets/robot1/107.webp";
import robot108 from "../assets/robot1/108.webp";
import robot109 from "../assets/robot1/109.webp";
import robot110 from "../assets/robot1/110.webp";
import robot111 from "../assets/robot1/111.webp";
import robot112 from "../assets/robot1/112.webp";
import robot113 from "../assets/robot1/113.webp";
import robot114 from "../assets/robot1/114.webp";
import robot115 from "../assets/robot1/115.webp";
import robot116 from "../assets/robot1/116.webp";
import robot117 from "../assets/robot1/117.webp";
import robot118 from "../assets/robot1/118.webp";
import robot119 from "../assets/robot1/119.webp";
import robot120 from "../assets/robot1/120.webp";
import robot121 from "../assets/robot1/121.webp";
import robot122 from "../assets/robot1/122.webp";
import robot123 from "../assets/robot1/123.webp";
import robot124 from "../assets/robot1/124.webp";
import robot125 from "../assets/robot1/125.webp";
import robot126 from "../assets/robot1/126.webp";
import robot127 from "../assets/robot1/127.webp";

class RobotAnimation extends Component {
  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  componentDidUpdate() {
    const { heights, viewType } = this.props;
    const { section1 } = heights;
    const newHeight = section1;

    const frameCount = 115;
    const html = document.documentElement;
    const context = this.canvas.current.getContext("2d");

    // painting the first frame
    const img = new Image();
    img.src = this.getCurrentImg(1);
    this.canvas.current.width = 600;
    this.canvas.current.height = 1200;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    // window.addEventListener("scroll  ", this.handleScrolling);
    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop - (viewType === "desktop" ? 2700 : 2500);
      const maxScrollTop = 5000 - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction < 0 ? 0 : scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImg(frameIndex + 1, context, img));
    });
  }

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

      case 115:
        return robot115;

      case 116:
        return robot116;

      case 117:
        return robot117;

      case 118:
        return robot118;

      // case 119:
      //   return robot119;

      // case 120:
      //   return robot120;

      // case 121:
      //   return robot121;

      // case 122:
      //   return robot122;

      // case 123:
      //   return robot123;

      // case 124:
      //   return robot124;

      // case 125:
      //   return robot125;

      // case 126:
      //   return robot126;

      // case 127:
      //   return robot127;

      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="robot-2">
          {/* <div className="img-container"></div> */}
          <canvas ref={this.canvas}></canvas>
        </div>
      </React.Fragment>
    );
  }
}

export default RobotAnimation;
