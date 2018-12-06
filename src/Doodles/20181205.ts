import Doodle from "./Doodle";

import { Point } from "./Point";

import { Triangle } from "./Triangle";

import { Colors } from "./Colors";

const screenSize = 128;
const frameCount = 30;
const genMax = 6;
export class DailyDoodle implements Doodle {
  private triangles: Triangle[] = [];
  private frame = 0;
  private gen = 0;
  public init() {
    this.triangles.push(
      new Triangle(
        new Point(screenSize / 2, 0),
        new Point(screenSize, screenSize),
        new Point(0, screenSize)
      )
    );
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      this.gen++;
      this.generate();
      if (this.gen >= genMax) {
        this.gen = 0;
        this.triangles = [];
        this.triangles.push(
          new Triangle(
            new Point(screenSize / 2, 0),
            new Point(screenSize, screenSize),
            new Point(0, screenSize)
          )
        );
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.red;
    for (const t of this.triangles) {
      ctx.beginPath();
      ctx.moveTo(t.a.x, t.a.y);
      ctx.lineTo(t.b.x, t.b.y);
      ctx.lineTo(t.c.x, t.c.y);
      ctx.lineTo(t.a.x, t.a.y);
      ctx.fill();
    }
  }

  private generate() {
    const next: Triangle[] = [];

    for (const t of this.triangles) {
      next.push(t.topInside());
      next.push(t.leftInside());
      next.push(t.rightInside());
    }

    this.triangles = next;
  }
}
