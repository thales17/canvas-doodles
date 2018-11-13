import Doodle from "./Doodle";

const screenSize = 128;

export class DailyDoodle implements Doodle {
  private angle: number;
  private radius: number;
  private radiusDir: number;

  public init() {
    this.angle = 0;
    this.radius = 0;
    this.radiusDir = 1;
  }

  public update() {
    this.angle -= 0.11;
    if (this.angle > 360) {
      this.angle = 0;
    }

    this.radius += 0.5 * this.radiusDir;
    if (this.radius > 10 || this.radius < 0) {
      this.radiusDir *= -1;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = "white";
    for (let i = 0; i < screenSize; i++) {
      const y = 64 + this.radius * Math.sin(i / 10 + this.angle);
      ctx.fillRect(i, y, 1, 1);
      for (let j = y; j < screenSize; j++) {
        ctx.fillRect(i, j, 2, 2);
      }
    }
  }
}
