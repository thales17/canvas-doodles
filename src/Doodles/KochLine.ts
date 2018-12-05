import { Point } from "./Point";

// Inspired by this: https://natureofcode.com/book/chapter-8-fractals/

export class KochLine {
  public start: Point;
  public end: Point;

  constructor(s: Point, e: Point) {
    this.start = new Point(s.x, s.y);
    this.end = new Point(e.x, e.y);
  }

  public kochA(): Point {
    return new Point(this.start.x, this.start.y);
  }

  public kochB(): Point {
    let v = this.end.sub(this.start);
    v = v.div(3);
    v = v.add(this.start);
    return new Point(v.x, v.y);
  }

  public kochC(): Point {
    let a = new Point(this.start.x, this.start.y);
    let v = this.end.sub(this.start);
    v = v.div(3);
    a = a.add(v);
    v = v.rotate(Math.PI / 3);
    a = a.add(v);
    return new Point(a.x, a.y);
  }

  public kochD(): Point {
    let v = this.end.sub(this.start);
    v = v.mult(2 / 3);
    v = v.add(this.start);
    return new Point(v.x, v.y);
  }

  public kochE(): Point {
    return new Point(this.end.x, this.end.y);
  }
}
