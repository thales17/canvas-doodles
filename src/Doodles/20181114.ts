import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

import { Point } from "./Point";

const screenSize = 128;
const pointCount = 500;
export class DailyDoodle implements Doodle {
  private index = 0;
  private points: Point[];
  private colors: string[];
  public init() {
    this.points = [];
    this.colors = [];
    for (let i = 0; i < pointCount; i++) {
      const p = new Point();
      p.x = Math.floor(Math.random() * 128);
      p.y = Math.floor(Math.random() * 128);
      this.points.push(p);
      this.colors.push(RandomColor());
    }
  }

  public update() {
    this.index++;
    if (this.index >= pointCount) {
      this.index = 0;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.lineWidth = 1;
    for (let i = 1; i < this.index; i++) {
      ctx.beginPath();
      ctx.strokeStyle = this.colors[i];
      ctx.moveTo(this.points[i - 1].x, this.points[i - 1].y);
      ctx.lineTo(this.points[i].x, this.points[i].y);
      ctx.stroke();
    }
  }
}
