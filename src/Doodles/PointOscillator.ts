import { Point } from "./Point";

export class PointOscillator {
  public p1: Point;
  public p2: Point;
  public p: Point;
  private xDir = 1;
  private yDir = 1;
  private dir = 1;

  constructor(p1: Point, p2: Point) {
    this.p1 = p1;
    this.p2 = p2;
    if (p1.x > p2.x) {
      this.xDir = -1;
    }
    if (p1.y > p2.y) {
      this.yDir = -1;
    }
    this.p = new Point(p1.x, p1.y);
  }

  public update() {
    this.p.x += this.xDir;
    this.p.y += this.yDir;
    let comparePoint = this.p2;
    if (this.dir < 0) {
      comparePoint = this.p1;
    }

    if (this.xDir > 0 && this.p.x > comparePoint.x) {
      this.p.x = comparePoint.x;
    }

    if (this.xDir < 0 && this.p.x < comparePoint.x) {
      this.p.x = comparePoint.x;
    }

    if (this.yDir > 0 && this.p.y > comparePoint.y) {
      this.p.y = comparePoint.y;
    }

    if (this.yDir < 0 && this.p.y < comparePoint.y) {
      this.p.y = comparePoint.y;
    }

    const xMatch = this.p.x === comparePoint.x;
    const yMatch = this.p.y === comparePoint.y;

    if (xMatch && yMatch) {
      this.dir *= -1;
      this.xDir *= -1;
      this.yDir *= -1;
    }
  }
}
