import Doodle from "./Doodle";

import { Colors } from "./Colors";

import { Point } from "./Point";

import { KochLine } from "./KochLine";

const screenSize = 128;
const frameCount = 30;
const genMax = 6;

export class DailyDoodle implements Doodle {
  private lines: KochLine[] = [];
  private frame: number = 0;
  private gen: number = 0;
  public init() {
    this.lines.push(new KochLine(new Point(0, 64), new Point(screenSize, 64)));
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.generate();
      this.gen++;
      if (this.gen >= genMax) {
        this.gen = 0;
        this.lines = [];
        this.lines.push(
          new KochLine(new Point(0, 64), new Point(screenSize, 64))
        );
      }
      this.frame = 0;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (const l of this.lines) {
      ctx.beginPath();
      ctx.strokeStyle = Colors.blue;
      ctx.lineWidth = 2;
      ctx.moveTo(l.start.x, l.start.y);
      ctx.lineTo(l.end.x, l.end.y);
      ctx.stroke();
    }
  }

  private generate() {
    const next: KochLine[] = [];
    for (const l of this.lines) {
      const a = l.kochA();
      const b = l.kochB();
      const c = l.kochC();
      const d = l.kochD();
      const e = l.kochE();

      next.push(new KochLine(a, b));
      next.push(new KochLine(b, c));
      next.push(new KochLine(c, d));
      next.push(new KochLine(d, e));
    }

    this.lines = next;
  }
}
