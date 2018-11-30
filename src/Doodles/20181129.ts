import Doodle from "./Doodle";

import { Colors } from "./Colors";

import { Point } from "./Point";

const screenSize = 128;
const frameDuration = 500;
const turnCount = 3;
const separation = 5;

export class DailyDoodle implements Doodle {
  private t: number = 0;
  private frame: number = 0;
  private points: Point[] = [];
  private color: string;
  public init() {
    this.points = [];
    let spiralSize = 5;
    let bottomLeft = new Point(
      Math.floor(screenSize / 2),
      Math.floor(screenSize / 2) + spiralSize
    );
    this.points.push(bottomLeft);
    for (let i = 0; i < turnCount * 4; i++) {
      const upperLeft = new Point(bottomLeft.x, bottomLeft.y - spiralSize);
      const upperRight = new Point(upperLeft.x + spiralSize, upperLeft.y);
      spiralSize += separation;
      const bottomRight = new Point(upperRight.x, upperRight.y + spiralSize);
      bottomLeft = new Point(bottomRight.x - spiralSize, bottomRight.y);
      spiralSize += separation;

      this.points.push(upperLeft);
      this.points.push(upperRight);
      this.points.push(bottomRight);
      this.points.push(bottomLeft);
    }
    this.color = Colors.green;
  }

  public update() {
    this.frame++;
    if (this.frame > frameDuration) {
      this.frame = 0;
      this.init();
    }
    this.t = this.frame / frameDuration;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);

    const drawPoints: Point[] = [this.points[0]];
    const percentage = this.points.length * this.t;
    const index = Math.floor(percentage);
    const diff = percentage - index;
    for (let i = 1; i < index; i++) {
      drawPoints.push(this.points[i]);
    }

    if (diff > 0) {
      if (index < this.points.length && index > 0) {
        const lastPoint = this.points[index - 1];
        const nextPoint = this.points[index];
        const newPoint = new Point(
          lastPoint.x + Math.floor((nextPoint.x - lastPoint.x) * diff),
          lastPoint.y + Math.floor((nextPoint.y - lastPoint.y) * diff)
        );
        drawPoints.push(newPoint);
      }
    }

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    for (let i = 0; i < drawPoints.length; i++) {
      if (i === 0) {
        ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
      } else {
        ctx.lineTo(drawPoints[i].x, drawPoints[i].y);
      }
      ctx.stroke();
    }
  }
}
