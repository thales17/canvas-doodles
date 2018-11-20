import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

const screenSize = 128;
const countMax = 10;

export class DailyDoodle implements Doodle {
  private count = 0;
  private countDir = 1;
  private colors: string[];
  public init() {
    this.colors = [];
    for (let i = 0; i < countMax; i++) {
      this.colors.push(RandomColor());
    }
  }

  public update() {
    this.count += this.countDir;
    if (this.count >= countMax || this.count < 0) {
      this.countDir *= -1;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.lineWidth = 2;
    ctx.fillStyle = RandomColor();
    this.drawHex(ctx, 64, 64, 64);
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
}
