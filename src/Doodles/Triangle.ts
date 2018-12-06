import { Point } from "./Point";

export class Triangle {
  public a: Point;
  public b: Point;
  public c: Point;

  constructor(a: Point, b: Point, c: Point) {
    this.a = new Point(a.x, a.y);
    this.b = new Point(b.x, b.y);
    this.c = new Point(c.x, c.y);
  }

  public topInside(): Triangle {
    let b = this.b.sub(this.a);
    b = b.div(2);
    b = this.a.add(b);

    let c = this.c.sub(this.a);
    c = c.div(2);
    c = this.a.add(c);

    return new Triangle(
      new Point(this.a.x, this.a.y),
      new Point(b.x, b.y),
      new Point(c.x, c.y)
    );
  }

  public leftInside(): Triangle {
    let a = this.a.sub(this.b);
    a = a.div(2);
    a = this.b.add(a);

    let c = this.c.sub(this.b);
    c = c.div(2);
    c = this.b.add(c);

    return new Triangle(
      new Point(a.x, a.y),
      new Point(this.b.x, this.b.y),
      new Point(c.x, c.y)
    );
  }

  public rightInside(): Triangle {
    let a = this.a.sub(this.c);
    a = a.div(2);
    a = this.c.add(a);

    let b = this.b.sub(this.c);
    b = b.div(2);
    b = this.c.add(b);

    return new Triangle(
      new Point(a.x, a.y),
      new Point(b.x, b.y),
      new Point(this.c.x, this.c.y)
    );
  }
}
