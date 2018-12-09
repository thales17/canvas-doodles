import Doodle from "./Doodle";

import { Point } from "./Point";

import { Colors } from "./Colors";

const pointCount = 2000;
const baseRadius = 20;
const maxRadius = 60;
const degToRad = 0.01745329;
export class DailyDoodle implements Doodle {
  private points: Point[] = [];
  private radii: number[] = [];
  private angles: number[] = [];
  private colors: number[] = [];
  public init() {
    for (let i = 0; i < pointCount; i++) {
      const r = Math.random() * (maxRadius - baseRadius) + baseRadius;
      const angle = Math.random() * 360;
      const x = 64 + Math.cos(angle * degToRad) * r;
      const y = 64 + Math.sin(angle * degToRad) * r;
      this.points.push(new Point(x, y));
      this.angles.push(angle);
      this.colors.push(Math.floor(Math.random() * 2));
      this.radii.push(r);
    }
  }

  public update() {
    for (let i = 0; i < pointCount; i++) {
      const r = this.radii[i];
      let angle = this.angles[i];
      angle += 0.4 * (Math.random() * 20);
      const x = 64 + Math.cos(angle * degToRad) * r;
      const y = 64 + Math.sin(angle * degToRad) * r;
      this.points[i] = new Point(x, y);
      this.angles[i] = angle;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 128, 128);
    for (let i = 0; i < pointCount; i++) {
      ctx.beginPath();
      ctx.fillStyle = this.colors[i] > 0.5 ? Colors.lightGrey : Colors.blue;
      ctx.fillRect(this.points[i].x, this.points[i].y, 1, 1);
    }
  }
}
