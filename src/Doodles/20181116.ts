import Doodle from "./Doodle";

import { Point } from "./Point";

import { Colors } from "./Colors";

const screenSize = 128;
const frameCount = 15;
const spriteWidth = 11;
const spriteHeight = 8;
const pixelSize = 2;

export class DailyDoodle implements Doodle {
  private frame: number;
  private spriteToggle: boolean;

  public init() {
    this.frame = 0;
    this.spriteToggle = false;
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      this.spriteToggle = !this.spriteToggle;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.white;
    const grid = Math.floor(
      screenSize / (Math.max(spriteWidth, spriteHeight) * pixelSize)
    );

    for (let i = 0; i < grid * grid; i++) {
      const c = i % grid;
      const r = Math.floor(i / grid);
      let isA = true;
      if (r % 2 === 1) {
        isA = !isA;
      }

      if (this.spriteToggle) {
        isA = !isA;
      }
      let points: Point[] = [];
      if (isA === true) {
        points = this.spriteA(
          new Point(
            c * (pixelSize + spriteWidth),
            r * (pixelSize + spriteWidth)
          )
        );
      } else {
        points = this.spriteB(
          new Point(
            c * (pixelSize + spriteWidth),
            r * (pixelSize + spriteWidth)
          )
        );
      }

      for (const p of points) {
        ctx.fillRect(p.x * pixelSize, p.y * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  private spriteA(offset: Point): Point[] {
    const points: Point[] = [];
    const ox = offset.x;
    const oy = offset.y;
    // Row 1
    points.push(new Point(ox + 2, oy + 0));
    points.push(new Point(ox + 8, oy + 0));
    // Row 2
    points.push(new Point(ox + 3, oy + 1));
    points.push(new Point(ox + 7, oy + 1));
    // Row 3
    for (let i = 2; i < 9; i++) {
      points.push(new Point(ox + i, oy + 2));
    }
    // Row 4
    for (let i = 1; i < 10; i++) {
      if (i === 3 || i === 7) {
        continue;
      }
      points.push(new Point(ox + i, oy + 3));
    }
    // Row 5
    for (let i = 0; i < 11; i++) {
      points.push(new Point(ox + i, oy + 4));
    }
    // Row 6
    points.push(new Point(ox + 0, oy + 5));
    points.push(new Point(ox + 10, oy + 5));
    for (let i = 2; i < 9; i++) {
      points.push(new Point(ox + i, oy + 5));
    }
    // Row 7
    points.push(new Point(ox + 0, oy + 6));
    points.push(new Point(ox + 2, oy + 6));
    points.push(new Point(ox + 8, oy + 6));
    points.push(new Point(ox + 10, oy + 6));

    // Row 8
    points.push(new Point(ox + 3, oy + 7));
    points.push(new Point(ox + 4, oy + 7));
    points.push(new Point(ox + 6, oy + 7));
    points.push(new Point(ox + 7, oy + 7));
    return points;
  }

  private spriteB(offset: Point): Point[] {
    const points: Point[] = [];
    const ox = offset.x;
    const oy = offset.y;
    // Row 1
    points.push(new Point(ox + 2, oy + 0));
    points.push(new Point(ox + 8, oy + 0));
    // Row 2
    points.push(new Point(ox + 0, oy + 1));
    points.push(new Point(ox + 3, oy + 1));
    points.push(new Point(ox + 7, oy + 1));
    points.push(new Point(ox + 10, oy + 1));

    // Row 3
    points.push(new Point(ox + 0, oy + 2));
    points.push(new Point(ox + 10, oy + 2));
    for (let i = 2; i < 9; i++) {
      points.push(new Point(ox + i, oy + 2));
    }
    // Row 4
    for (let i = 0; i < 11; i++) {
      if (i === 3 || i === 7) {
        continue;
      }
      points.push(new Point(ox + i, oy + 3));
    }
    // Row 5
    for (let i = 1; i < 10; i++) {
      points.push(new Point(ox + i, oy + 4));
    }
    // Row 6
    for (let i = 2; i < 9; i++) {
      points.push(new Point(ox + i, oy + 5));
    }
    // Row 7
    points.push(new Point(ox + 2, oy + 6));
    points.push(new Point(ox + 8, oy + 6));

    // Row 8
    points.push(new Point(ox + 1, oy + 7));
    points.push(new Point(ox + 9, oy + 7));
    return points;
  }
}
