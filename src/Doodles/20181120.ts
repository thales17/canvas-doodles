import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;
const frameCount = 10;
const totalFrames = 8;

export class DailyDoodle implements Doodle {
  private frame = 0;
  private animFrame = 0;
  private animDir = 1;
  public init() {
    // nop
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      this.animFrame += this.animDir;
      if (this.animFrame >= totalFrames || this.animFrame < 0) {
        this.animDir *= -1;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.strokeStyle = Colors.white;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(64, 44, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(64, 54);
    ctx.lineTo(64, 84);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(64, 84);
    ctx.lineTo(74, 99);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(64, 84);
    ctx.lineTo(54, 99);
    ctx.stroke();

    // Left ARM
    ctx.beginPath();
    ctx.moveTo(64, 69);
    if (this.animFrame === 1) {
      ctx.lineTo(41, 69);
      ctx.lineTo(41, 59);
      ctx.lineTo(34, 59);
      ctx.lineTo(34, 69);
    } else if (this.animFrame === 2) {
      ctx.lineTo(48, 69);
      ctx.lineTo(48, 79);
      ctx.lineTo(41, 79);
      ctx.lineTo(41, 69);
    } else if (this.animFrame === 3) {
      ctx.lineTo(55, 69);
      ctx.lineTo(55, 59);
      ctx.lineTo(48, 59);
      ctx.lineTo(48, 69);
    }
    ctx.lineTo(29, 69);
    ctx.stroke();

    // Right ARM
    ctx.beginPath();
    ctx.moveTo(64, 69);
    if (this.animFrame === 4) {
      ctx.lineTo(69, 69);
      ctx.lineTo(69, 79);
      ctx.lineTo(76, 79);
      ctx.lineTo(76, 69);
    } else if (this.animFrame === 5) {
      ctx.lineTo(76, 69);
      ctx.lineTo(76, 59);
      ctx.lineTo(83, 59);
      ctx.lineTo(83, 69);
    } else if (this.animFrame === 6) {
      ctx.lineTo(83, 69);
      ctx.lineTo(83, 79);
      ctx.lineTo(90, 79);
      ctx.lineTo(90, 69);
    }
    ctx.lineTo(99, 69);
    ctx.stroke();
  }
}
