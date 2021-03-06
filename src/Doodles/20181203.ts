import Doodle from "./Doodle";

import { Point } from "./Point";

import { PointOscillator } from "./PointOscillator";

import { Colors } from "./Colors";

const screenSize = 128;
const pointCount = 1000;
export class DailyDoodle implements Doodle {
  private pos: PointOscillator[] = [];
  public init() {
    for (let i = 0; i < pointCount; i++) {
      this.pos.push(
        new PointOscillator(
          new Point(randPixel(), randPixel()),
          new Point(randPixel(), randPixel())
        )
      );
    }
  }

  public update() {
    for (const po of this.pos) {
      po.update();
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = Colors.white;
    ctx.fillRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.black;
    for (const po of this.pos) {
      ctx.fillRect(po.p.x, po.p.y, 1, 1);
    }
  }
}

function randPixel(): number {
  return Math.floor(Math.random() * screenSize);
}
