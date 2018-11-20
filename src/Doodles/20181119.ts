import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

const screenSize = 128;
const countMax = 10;
const frameMax = 3;
export class DailyDoodle implements Doodle {
  private count = 0;
  private countDir = 1;
  private frame = 0;
  private colors: string[];
  public init() {
    this.colorReset();
  }

  public update() {
    this.frame++;
    if (this.frame >= frameMax) {
      this.count += this.countDir;
      if (this.count >= countMax || this.count < 0) {
        this.countDir *= -1;
        if (this.count < 0) {
          this.colorReset();
        }
      }
      this.frame = 0;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    const radiusStep = Math.floor(100 / countMax);
    for (let i = this.count; i >= 0; i--) {
      ctx.fillStyle = this.colors[i];
      this.drawHex(ctx, 64, 64, i * radiusStep);
    }
  }

  private drawHex(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number
  ) {
    const v1 = 0.866;
    const v2 = 0.5;
    ctx.beginPath();
    ctx.moveTo(r + x, y);
    ctx.lineTo(r * v2 + x, r * v1 + y);
    ctx.lineTo(r * v2 * -1 + x, r * v1 + y);
    ctx.lineTo(r * -1 + x, y);
    ctx.lineTo(r * v2 * -1 + x, r * v1 * -1 + y);
    ctx.lineTo(r * v2 + x, r * v1 * -1 + y);
    ctx.lineTo(r + x, y);

    ctx.fill();
  }

  private colorReset() {
    this.colors = [];
    for (let i = 0; i < countMax; i++) {
      this.colors.push(RandomColor());
    }
  }
}
