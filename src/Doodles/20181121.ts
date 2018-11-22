import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;

const frameCount = 5;
const pupilMax = 5;

export class DailyDoodle implements Doodle {
  private frame = 0;
  private pupilOffset = 0;
  private pupilDir = 1;
  public init() {
    // nop
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      this.pupilOffset += this.pupilDir;
      if (Math.abs(this.pupilOffset) >= pupilMax) {
        this.pupilDir *= -1;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.strokeStyle = Colors.white;
    ctx.beginPath();
    ctx.arc(64, 64, 50, 0, 2 * Math.PI);
    ctx.stroke();

    // Left Eye
    ctx.beginPath();
    ctx.fillStyle = Colors.white;
    ctx.arc(43, 48, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = Colors.black;
    ctx.arc(43 + this.pupilOffset, 48, 7, 0, 2 * Math.PI);
    ctx.fill();

    // Right Eye
    ctx.beginPath();
    ctx.fillStyle = Colors.white;
    ctx.arc(85, 48, 15, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = Colors.black;
    ctx.arc(85 + this.pupilOffset, 48, 7, 0, 2 * Math.PI);
    ctx.fill();

    // Mouth
    ctx.strokeStyle = Colors.white;
    ctx.beginPath();
    ctx.moveTo(44, 75);
    ctx.lineTo(84, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(64, 75, 20, 0, Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(69, 75);
    ctx.lineTo(69, 95);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(77, 75);
    ctx.lineTo(77, 89);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(59, 75);
    ctx.lineTo(59, 95);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(51, 75);
    ctx.lineTo(51, 89);
    ctx.stroke();
  }
}
