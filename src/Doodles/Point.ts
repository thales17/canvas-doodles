export class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public sub(p: Point): Point {
    return new Point(this.x - p.x, this.y - p.y);
  }

  public add(p: Point): Point {
    return new Point(this.x + p.x, this.y + p.y);
  }

  public mult(n: number): Point {
    return new Point(this.x * n, this.y * n);
  }

  public div(n: number): Point {
    return new Point(this.x / n, this.y / n);
  }

  public rotate(angle: number): Point {
    const cs = Math.cos(angle);
    const sn = Math.sin(angle);
    return new Point(this.x * cs - this.y * sn, this.x * sn + this.y * cs);
  }
}
