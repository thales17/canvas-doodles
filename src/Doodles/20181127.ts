import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

const screenSize = 128;
const gridCount = 10;
const gridSize = Math.floor(screenSize / gridCount) - 2;

export class DailyDoodle implements Doodle {
  private angle = 0;
  public init() {
    // nop
  }

  public update() {
    this.angle++;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < gridCount * gridCount; i++) {
      ctx.save();
      const c = i % gridCount;
      const r = Math.floor(i / gridCount);
      const x = c * (gridSize + 3);
      const y = r * (gridSize + 3);
      const cx = x + Math.floor(gridSize / 2);
      const cy = y + Math.floor(gridSize / 2);
      let angle = this.angle;
      if (i % 2 === 0) {
        angle *= -1;
      }
      ctx.translate(cx, cy);
      ctx.rotate((Math.PI / 180) * angle);
      ctx.translate(-cx, -cy);
      ctx.fillStyle = RandomColor();
      ctx.fillRect(x, y, gridSize, gridSize);
      ctx.restore();
    }
  }
}
