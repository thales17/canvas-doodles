import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

import { drawHex } from "./Hex";

const screenSize = 128;

export class DailyDoodle implements Doodle {
  private colors: string[] = [];
  private angle = 0;
  public init() {
    for (let i = 0; i < 10; i++) {
      this.colors.push(RandomColor());
    }
  }

  public update() {
    this.angle++;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < 10; i++) {
      ctx.save();
      ctx.fillStyle = this.colors[i];
      ctx.translate(64, 64);
      let angle = this.angle;
      if (i % 2 === 0) {
        angle *= -1;
      }
      ctx.rotate((Math.PI / 180) * angle);
      ctx.translate(-64, -64);
      drawHex(ctx, 64, 64, 5 * (10 - i));
      ctx.restore();
    }
  }
}
