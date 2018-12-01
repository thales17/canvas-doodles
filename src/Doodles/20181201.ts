import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;
const gridCount = 10;
const gridSize = Math.floor(screenSize / gridCount);
const frameCount = 2;
const maxRadius = Math.floor(gridSize / 2) + 8;
export class DailyDoodle implements Doodle {
  private frame = 0;
  private radii: number[] = [];
  private offsets: number[] = [];
  private rDirs: number[] = [];
  public init() {
    for (let i = 0; i < gridCount * gridCount; i++) {
      this.offsets.push(i / 3);
      this.rDirs.push(1);
      this.radii.push(0);
    }
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      for (let i = 0; i < gridCount * gridCount; i++) {
        if (this.offsets[i] > 0) {
          this.offsets[i] -= 1;
        } else {
          this.radii[i] += this.rDirs[i];
          if (this.radii[i] >= maxRadius || this.radii[i] <= 0) {
            this.rDirs[i] *= -1;
          }
        }
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    const halfSize = Math.floor(gridSize / 2);
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < gridCount * gridCount; i++) {
      const c = i % gridCount;
      const r = Math.floor(i / gridCount);
      ctx.beginPath();
      ctx.fillStyle = Colors.blue;
      ctx.arc(
        4 + c * gridSize + halfSize,
        4 + r * gridSize + halfSize,
        this.radii[i],
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }
}
