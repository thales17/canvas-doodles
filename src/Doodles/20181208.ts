import Doodle from "./Doodle";

import { Colors, RandomColor } from "./Colors";

import { Point } from "./Point";

const screenSize = 128;
const planetCount = 6;
const frameCount = 100000;
const starRadius = 20;
const planetRadius = 3;
const degToRad = 0.01745329;
export class DailyDoodle implements Doodle {
  private frame = 0;
  private planets: Point[] = [];
  private colors: string[] = [];
  private angles: number[] = [];
  public init() {
    for (let i = 0; i < planetCount; i++) {
      this.colors.push(RandomColor());
      this.angles.push(Math.random() * 360);
      const radius = starRadius + (i + 1) * 7;
      const p = new Point(
        64 + Math.cos(this.angles[i] * degToRad) * radius,
        64 + Math.sin(this.angles[i] * degToRad) * radius
      );
      this.planets.push(p);
    }
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
    }

    for (let i = 0; i < planetCount; i++) {
      const radius = starRadius + (i + 1) * 7;
      if (this.frame % i === 0 || i === 0) {
        this.angles[i] += 2;
        const p = new Point(
          64 + Math.cos(this.angles[i] * degToRad) * radius,
          64 + Math.sin(this.angles[i] * degToRad) * radius
        );
        this.planets[i] = p;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.darkBlue;
    ctx.fillRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.orange;
    ctx.beginPath();
    ctx.arc(64, 64, starRadius, 0, 2 * Math.PI);
    ctx.fill();

    for (let i = 0; i < planetCount; i++) {
      ctx.beginPath();
      ctx.strokeStyle = Colors.darkGrey;
      // const radius = starRadius + (i + 1) * 10;
      const p = this.planets[i];
      // ctx.arc(64, 64, radius, 0, 2 * Math.PI);
      // ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = this.colors[i];
      ctx.arc(p.x, p.y, planetRadius + i / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
