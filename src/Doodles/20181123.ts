import Doodle from "./Doodle";

import { Colors } from "./Colors";

import { Point } from "./Point";

const screenSize = 128;
const starCount = 75;
const maxDistance = 15;
// const maxTravelDistance = 400;
export class DailyDoodle implements Doodle {
  private stars: Point[] = [];
  private spread: number[] = [];
  private traveledDistance = 0;

  public init() {
    for (let i = 0; i < starCount; i++) {
      this.stars.push(
        new Point(
          Math.floor(Math.random() * maxDistance),
          Math.floor(Math.random() * screenSize)
        )
      );
      this.spread.push(Math.floor(Math.random() * screenSize));
    }
  }

  public update() {
    this.traveledDistance++;
    // if (this.traveledDistance >= maxTravelDistance) {
    //   this.traveledDistance = 0;
    // }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < starCount; i++) {
      const p = this.stars[i];
      const spread = this.spread[i];
      const size = Math.floor(maxDistance / p.x);
      const offset = Math.floor((this.traveledDistance * 2) / p.x);
      ctx.beginPath();
      ctx.fillStyle = Colors.white;
      ctx.fillRect((p.x + offset + spread) % screenSize, p.y, size, size);
    }
  }
}
