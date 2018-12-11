import Doodle from "./Doodle";

import { Colors } from "./Colors";

const frameCount = 20;
const endFrameCount = 5;
export class DailyDoodle implements Doodle {
  private frame = 0;
  private drawFrame = 0;
  private endFrames = endFrameCount;
  public init() {
    // nop
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      if (this.drawFrame === 5) {
        if (this.endFrames > 0) {
          this.endFrames--;
        } else {
          this.endFrames = endFrameCount;
          this.drawFrame = 0;
        }
      } else {
        this.drawFrame++;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = Colors.pink;
    ctx.fillRect(0, 0, 128, 128);
    if (this.drawFrame >= 1) {
      this.drawBlob(ctx);
    }

    if (this.drawFrame >= 2) {
      this.drawEars(ctx);
    }

    if (this.drawFrame >= 3) {
      this.drawArmsAndLegs(ctx);
    }

    if (this.drawFrame >= 4) {
      this.drawCuteFace(ctx);
    }
  }

  private drawBlob(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(32, 44);
    ctx.lineTo(32, 95);
    ctx.moveTo(96, 44);
    ctx.lineTo(96, 95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(32, 44);
    ctx.bezierCurveTo(40, 10, 88, 10, 96, 44);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(32, 95);
    ctx.bezierCurveTo(37, 112, 91, 112, 96, 95);
    ctx.stroke();
  }

  private drawEars(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(32, 40);
    ctx.quadraticCurveTo(20, 12, 52, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(96, 40);
    ctx.quadraticCurveTo(108, 12, 76, 20);

    ctx.stroke();
  }

  private drawArmsAndLegs(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(96, 54);
    ctx.quadraticCurveTo(128, 55, 96, 74);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(32, 54);
    ctx.quadraticCurveTo(0, 55, 32, 74);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(32, 95);
    ctx.quadraticCurveTo(15, 138, 52, 106);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(96, 95);
    ctx.quadraticCurveTo(113, 138, 72, 107);
    ctx.stroke();
  }

  private drawCuteFace(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(46, 33);
    ctx.quadraticCurveTo(58, 23, 61, 33);
    ctx.lineTo(51, 50);
    ctx.quadraticCurveTo(40, 65, 36, 50);
    ctx.lineTo(46, 33);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(68, 33);
    ctx.quadraticCurveTo(73, 23, 83, 33);
    ctx.lineTo(93, 50);
    ctx.quadraticCurveTo(88, 65, 78, 50);
    ctx.lineTo(68, 33);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(44, 40);
    ctx.quadraticCurveTo(48, 50, 52, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(76, 40);
    ctx.quadraticCurveTo(80, 50, 84, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = Colors.black;
    ctx.arc(64, 45, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(64, 45);
    ctx.quadraticCurveTo(59, 55, 55, 49);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(64, 45);
    ctx.quadraticCurveTo(69, 55, 73, 49);
    ctx.stroke();
  }
}
