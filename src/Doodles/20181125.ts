import Doodle from "./Doodle";

import { Colors } from "./Colors";
import { Point } from "./Point";

const screenSize = 128;
const cloudWidth = 60;
const cloudHeight = 20;
const cloudOffset = 20;
const maxDrops = 50;
const minDropSpeed = 1;
const maxDropSpeed = 5;

export class DailyDoodle implements Doodle {
  private drops: Point[] = [];
  public init() {
    // nop
  }

  public update() {
    this.spawnDrop();
    this.moveDrops();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);

    ctx.fillStyle = Colors.blue;
    for (const d of this.drops) {
      ctx.fillRect(d.x, d.y, 2, 10);
    }

    this.drawCloud(ctx);
  }

  private drawCloud(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = Colors.white;
    const x = Math.floor((screenSize - cloudWidth) / 2);
    const y = cloudOffset;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 10, y - 13, x + 20, y);
    ctx.quadraticCurveTo(x + 30, y - 10, x + 40, y);
    ctx.quadraticCurveTo(x + 50, y - 15, x + 60, y);
    ctx.quadraticCurveTo(x + 70, y + 10, x + 60, y + 20);
    ctx.quadraticCurveTo(x + 50, y + 32, x + 40, y + 20);
    ctx.quadraticCurveTo(x + 30, y + 35, x + 20, y + 20);
    ctx.quadraticCurveTo(x + 30, y + 35, x + 20, y + 20);
    ctx.quadraticCurveTo(x + 10, y + 31, x, y + 20);
    ctx.quadraticCurveTo(x - 10, y + 12, x, y);
    ctx.fill();
  }

  private spawnDrop(): boolean {
    if (this.drops.length >= maxDrops) {
      return false;
    }

    this.drops.push(
      new Point(
        Math.floor((screenSize - cloudWidth) / 2) +
          Math.floor(Math.random() * cloudWidth),
        cloudOffset + cloudHeight
      )
    );
    return true;
  }

  private moveDrops() {
    for (const d of this.drops) {
      d.y +=
        minDropSpeed +
        Math.floor(Math.random() * (maxDropSpeed - minDropSpeed));
      if (d.y > screenSize + cloudOffset) {
        d.y = cloudOffset + cloudHeight;
      }
    }
  }
}
