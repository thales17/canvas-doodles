import Doodle from "./Doodle";

import { Point } from "./Point";

import { PointOscillator } from "./PointOscillator";

import { Colors } from "./Colors";

const screenSize = 128;
const pointCount = 1000;
const bigRadius = 40;
const littleRadius = 10;
export class DailyDoodle implements Doodle {
  private pos: PointOscillator[] = [];
  public init() {
    for (let i = 0; i < pointCount; i++) {
      const angle = 2 * Math.PI * (i / pointCount);
      const bigCircleX = 64 + Math.cos(angle) * bigRadius;
      const bigCircleY = 64 + Math.sin(angle) * bigRadius;
      const littleCircleX = 64 + Math.cos(angle) * littleRadius;
      const littleCircleY = 64 + Math.sin(angle) * littleRadius;
      this.pos.push(
        new PointOscillator(
          new Point(littleCircleX, littleCircleY),
          new Point(bigCircleX, bigCircleY)
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
    ctx.fillStyle = Colors.green;
    ctx.fillRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.black;
    for (const po of this.pos) {
      ctx.fillRect(po.p.x, po.p.y, 1, 1);
    }
  }
}
