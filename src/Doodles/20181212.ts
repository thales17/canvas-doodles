import Doodle from "./Doodle";

import { Colors } from "./Colors";
import { Point } from "./Point";

const maxAngle = Math.PI / 3;
const angleStep = maxAngle / 10;
export class DailyDoodle implements Doodle {
  private angle = 0;
  private angleDir = 1;
  private point = new Point(-64, 64);
  public init() {
    // nop
  }

  public update() {
    this.angle += angleStep * this.angleDir;
    if (this.angle > maxAngle || this.angle < 0) {
      this.angleDir *= -1;
    }

    this.point.x++;
    if (this.point.x >= 192) {
      this.point.x = -64;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 128, 128);
    for (let i = 15; i < 128; i += 15) {
      if (i > this.point.x) {
        this.drawDot(ctx, new Point(i - 4, 64));
      }
    }
    this.drawPacman(ctx, this.point, 20, this.angle);
  }

  private drawDot(ctx: CanvasRenderingContext2D, p: Point) {
    ctx.fillStyle = Colors.white;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
    ctx.fill();
  }
  private drawPacman(
    ctx: CanvasRenderingContext2D,
    p: Point,
    radius: number,
    angle: number
  ) {
    ctx.fillStyle = Colors.yellow;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(
      Math.floor(Math.cos(angle / 2) * radius + p.x),
      Math.floor(Math.sin(angle / 2) * radius + p.y)
    );
    ctx.arc(p.x, p.y, radius, angle / 2, 2 * Math.PI - angle);
    ctx.fill();
  }
}
