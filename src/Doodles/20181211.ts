import Doodle from "./Doodle";

import { Colors } from "./Colors";
import { Point } from "./Point";

export class DailyDoodle implements Doodle {
  public init() {
    // nop
  }

  public update() {
    // nop
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 128, 128);
    ctx.beginPath();
    ctx.strokeStyle = Colors.white;

    for (let j = 0; j < 8; j++) {
      const points = this.randomPolygon(new Point(64, 64), 10 * j);
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.lineTo(points[0].x, points[0].y);
      ctx.stroke();
    }
  }

  private randomPolygon(cp: Point, r: number): Point[] {
    const points: Point[] = [];
    const wiggle = () => {
      const dir = Math.random() * 10 > 5 ? -1 : 1;
      return Math.floor(Math.random() * (r / 6) * dir);
    };
    points.push(new Point(cp.x - r + wiggle(), cp.y - r + wiggle()));
    points.push(new Point(cp.x + wiggle(), cp.y - r + wiggle()));
    points.push(new Point(cp.x + r + wiggle(), cp.y - r + wiggle()));
    points.push(new Point(cp.x + r + wiggle(), cp.y + wiggle()));
    points.push(new Point(cp.x + r + wiggle(), cp.y + r + wiggle()));
    points.push(new Point(cp.x + wiggle(), cp.y + r + wiggle()));
    points.push(new Point(cp.x - r + wiggle(), cp.y + r + wiggle()));
    points.push(new Point(cp.x - r + wiggle(), cp.y + wiggle()));
    return points;
  }
}
