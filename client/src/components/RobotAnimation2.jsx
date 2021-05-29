import React, { Component, createRef } from "react";
import "../style/RobotAnimation.css";
import gsap from "gsap";
import robot1 from "../assets/robot3webp/001.webp";
import robot2 from "../assets/robot3webp/002.webp";
import robot3 from "../assets/robot3webp/003.webp";
import robot4 from "../assets/robot3webp/004.webp";
import robot5 from "../assets/robot3webp/005.webp";
import robot6 from "../assets/robot3webp/006.webp";
import robot7 from "../assets/robot3webp/007.webp";
import robot8 from "../assets/robot3webp/008.webp";
import robot9 from "../assets/robot3webp/009.webp";
import robot10 from "../assets/robot3webp/010.webp";
import robot11 from "../assets/robot3webp/011.webp";
import robot12 from "../assets/robot3webp/012.webp";
import robot13 from "../assets/robot3webp/013.webp";
import robot14 from "../assets/robot3webp/014.webp";
import robot15 from "../assets/robot3webp/015.webp";
import robot16 from "../assets/robot3webp/016.webp";
import robot17 from "../assets/robot3webp/017.webp";
import robot18 from "../assets/robot3webp/018.webp";
import robot19 from "../assets/robot3webp/019.webp";
import robot20 from "../assets/robot3webp/020.webp";
import robot21 from "../assets/robot3webp/021.webp";
import robot22 from "../assets/robot3webp/022.webp";
import robot23 from "../assets/robot3webp/023.webp";
import robot24 from "../assets/robot3webp/024.webp";
import robot25 from "../assets/robot3webp/025.webp";
import robot26 from "../assets/robot3webp/026.webp";
import robot27 from "../assets/robot3webp/027.webp";
import robot28 from "../assets/robot3webp/028.webp";
import robot29 from "../assets/robot3webp/029.webp";
import robot30 from "../assets/robot3webp/030.webp";
import robot31 from "../assets/robot3webp/031.webp";
import robot32 from "../assets/robot3webp/032.webp";
import robot33 from "../assets/robot3webp/033.webp";
import robot34 from "../assets/robot3webp/034.webp";
import robot35 from "../assets/robot3webp/035.webp";
import robot36 from "../assets/robot3webp/036.webp";
import robot37 from "../assets/robot3webp/037.webp";
import robot38 from "../assets/robot3webp/038.webp";
import robot39 from "../assets/robot3webp/039.webp";
import robot40 from "../assets/robot3webp/040.webp";
import robot41 from "../assets/robot3webp/041.webp";
import robot42 from "../assets/robot3webp/042.webp";
import robot43 from "../assets/robot3webp/043.webp";
import robot44 from "../assets/robot3webp/044.webp";
import robot45 from "../assets/robot3webp/045.webp";
import robot46 from "../assets/robot3webp/046.webp";
import robot47 from "../assets/robot3webp/047.webp";
import robot48 from "../assets/robot3webp/048.webp";
import robot49 from "../assets/robot3webp/049.webp";
import robot50 from "../assets/robot3webp/050.webp";
import robot51 from "../assets/robot3webp/051.webp";
import robot52 from "../assets/robot3webp/052.webp";
import robot53 from "../assets/robot3webp/053.webp";
import robot54 from "../assets/robot3webp/054.webp";
import robot55 from "../assets/robot3webp/055.webp";
import robot56 from "../assets/robot3webp/056.webp";
import robot57 from "../assets/robot3webp/057.webp";
import robot58 from "../assets/robot3webp/058.webp";
import robot59 from "../assets/robot3webp/059.webp";
import robot60 from "../assets/robot3webp/060.webp";
import robot61 from "../assets/robot3webp/061.webp";
import robot62 from "../assets/robot3webp/062.webp";
import robot63 from "../assets/robot3webp/063.webp";
import robot64 from "../assets/robot3webp/064.webp";
import robot65 from "../assets/robot3webp/065.webp";
import robot66 from "../assets/robot3webp/066.webp";
import robot67 from "../assets/robot3webp/067.webp";
import robot68 from "../assets/robot3webp/068.webp";
import robot69 from "../assets/robot3webp/069.webp";
import robot70 from "../assets/robot3webp/070.webp";
import robot71 from "../assets/robot3webp/071.webp";
import robot72 from "../assets/robot3webp/072.webp";
import robot73 from "../assets/robot3webp/073.webp";
import robot74 from "../assets/robot3webp/074.webp";
import robot75 from "../assets/robot3webp/075.webp";
import robot76 from "../assets/robot3webp/076.webp";
import robot77 from "../assets/robot3webp/077.webp";
import robot78 from "../assets/robot3webp/078.webp";
import robot79 from "../assets/robot3webp/079.webp";
import robot80 from "../assets/robot3webp/080.webp";
import robot81 from "../assets/robot3webp/081.webp";
import robot82 from "../assets/robot3webp/082.webp";
import robot83 from "../assets/robot3webp/083.webp";
import robot84 from "../assets/robot3webp/084.webp";
import robot85 from "../assets/robot3webp/085.webp";
import robot86 from "../assets/robot3webp/086.webp";
import robot87 from "../assets/robot3webp/087.webp";
import robot88 from "../assets/robot3webp/088.webp";
import robot89 from "../assets/robot3webp/089.webp";
import robot90 from "../assets/robot3webp/090.webp";
import robot91 from "../assets/robot3webp/091.webp";
import robot92 from "../assets/robot3webp/092.webp";
import robot93 from "../assets/robot3webp/093.webp";
import robot94 from "../assets/robot3webp/094.webp";
import robot95 from "../assets/robot3webp/095.webp";
import robot96 from "../assets/robot3webp/095.webp";
import robot97 from "../assets/robot3webp/095.webp";
import robot98 from "../assets/robot3webp/095.webp";
import robot99 from "../assets/robot3webp/095.webp";
import robot100 from "../assets/robot3webp/095.webp";
import robot101 from "../assets/robot3webp/095.webp";
import robot102 from "../assets/robot3webp/095.webp";
import robot103 from "../assets/robot3webp/095.webp";
import robot104 from "../assets/robot3webp/095.webp";
import robot105 from "../assets/robot3webp/095.webp";
import robot106 from "../assets/robot3webp/095.webp";
import robot107 from "../assets/robot3webp/096.webp";
import robot108 from "../assets/robot3webp/097.webp";
import robot109 from "../assets/robot3webp/098.webp";
import robot110 from "../assets/robot3webp/099.webp";
import robot111 from "../assets/robot3webp/100.webp";
import robot112 from "../assets/robot3webp/101.webp";
import robot113 from "../assets/robot3webp/102.webp";
import robot114 from "../assets/robot3webp/103.webp";
import robot115 from "../assets/robot3webp/104.webp";
import robot116 from "../assets/robot3webp/105.webp";
import robot117 from "../assets/robot3webp/106.webp";
import robot118 from "../assets/robot3webp/107.webp";
import robot119 from "../assets/robot3webp/108.webp";
import robot120 from "../assets/robot3webp/109.webp";
import robot121 from "../assets/robot3webp/110.webp";
import robot122 from "../assets/robot3webp/111.webp";
import robot123 from "../assets/robot3webp/112.webp";
import robot124 from "../assets/robot3webp/113.webp";
import robot125 from "../assets/robot3webp/114.webp";
import robot126 from "../assets/robot3webp/115.webp";
import robot127 from "../assets/robot3webp/116.webp";
import robot128 from "../assets/robot3webp/117.webp";
import robot129 from "../assets/robot3webp/118.webp";
import robot130 from "../assets/robot3webp/119.webp";
import robot131 from "../assets/robot3webp/120.webp";
import robot132 from "../assets/robot3webp/121.webp";
import robot133 from "../assets/robot3webp/122.webp";
import robot134 from "../assets/robot3webp/123.webp";
import robot135 from "../assets/robot3webp/124.webp";
import robot136 from "../assets/robot3webp/125.webp";
import robot137 from "../assets/robot3webp/126.webp";
import robot138 from "../assets/robot3webp/127.webp";

class RobotAnimation2 extends Component {
  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  componentDidUpdate() {
    const { heights, viewType, homeRef } = this.props;
    const { section1 } = heights;
    const newHeight = section1;

    const frameCount = 135;
    const html = document.documentElement;
    const context = this.canvas.current.getContext("2d");

    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = this.getCurrentImg(i);
    }

    // painting the first frame
    const img = new Image();
    img.src = this.getCurrentImg(1);

    this.canvas.current.width = 800;
    this.canvas.current.height = 1731;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    // window.addEventListener("scroll  ", this.handleScrolling);
    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop - (viewType === "desktop" ? 2900 : 2500);
      const maxScrollTop = 5800 - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction < 0 ? 0 : scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImg(frameIndex + 1, context, img));
    });

    // canvas animation
    // canvas vertical movement between container-2 and container-3
    gsap.fromTo(
      this.canvas.current,
      {
        width: "600px",
        y: "-250px",
      },

      {
        width: "800px",
        y: "-600px",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 3400} center`,
          end: `top+=${newHeight + 3800} center`,
          scrub: true,
        },
      }
    );

    // canvas horizontal movement before section-3
    gsap.fromTo(
      this.canvas.current,
      {
        x: "0px",
      },
      {
        x: "200px",
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 3200} center`,
          end: `top+=${newHeight + 4000} center`,
          scrub: true,
        },
      }
    );

    // canvas opacity equal 0 after section-3
    gsap.fromTo(
      this.canvas.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 5550} center`,
          scrub: true,
        },
      }
    );

    // canvas opacity 1 before container-1
    gsap.fromTo(
      this.canvas.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.01,
        scrollTrigger: {
          trigger: homeRef,
          start: `top+=${newHeight + 1000} top`,
          toggleActions: "play none none reverse",
        },
      }
    );
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

      case 128:
        return robot128;

      case 129:
        return robot129;

      case 130:
        return robot130;

      case 131:
        return robot131;

      case 132:
        return robot132;

      case 133:
        return robot133;

      case 134:
        return robot134;

      case 135:
        return robot135;

      case 136:
        return robot136;

      case 137:
        return robot137;

      case 138:
        return robot138;

      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="robot-3">
          <canvas ref={this.canvas}></canvas>
        </div>
      </React.Fragment>
    );
  }
}

export default RobotAnimation2;
