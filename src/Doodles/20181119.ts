import Doodle from "./Doodle";

import { RandomColor } from "./Colors";
import { drawHex } from "./Hex";

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
      drawHex(ctx, 64, 64, i * radiusStep);
    }
  }

  private colorReset() {
    this.colors = [];
    for (let i = 0; i < countMax; i++) {
      this.colors.push(RandomColor());
    }
  }
}
