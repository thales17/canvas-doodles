import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;
const frameCount = 5;
const drawSize = 10;
const gridCount = Math.floor(screenSize / drawSize);

export class DailyDoodle implements Doodle {
  private frame = 0;
  private drawIndex = 0;
  public init() {
    // nop
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
      this.drawIndex++;
      if (this.drawIndex >= gridCount * gridCount) {
        this.drawIndex = 0;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = Colors.white;
    ctx.fillRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < this.drawIndex; i++) {
      const c = i % gridCount;
      const r = Math.floor(i / gridCount);
      if (i % 4 === 0) {
        this.drawDiamond(ctx, c * gridCount, r * gridCount, 10);
      } else if (i % 4 === 2) {
        this.drawHeart(ctx, c * gridCount, r * gridCount, 10);
      } else if (i % 4 === 1) {
        this.drawSpade(ctx, c * gridCount, r * gridCount, 10);
      } else if (i % 4 === 3) {
        this.drawClub(ctx, c * gridCount, r * gridCount, 10);
      }
    }

    // this.drawClub(ctx, 10, 10, 30);
  }

  private drawDiamond(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    size: number
  ) {
    const halfSize = Math.floor(size / 2);
    ctx.fillStyle = Colors.red;
    ctx.beginPath();
    ctx.moveTo(cx, cy + halfSize);
    ctx.lineTo(cx + halfSize, cy);
    ctx.lineTo(cx + size, cy + halfSize);
    ctx.lineTo(cx + halfSize, cy + size);
    ctx.lineTo(cx, cy + halfSize);
    ctx.fill();
  }

  private drawHeart(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    size: number
  ) {
    const halfSize = Math.floor(size / 2);
    const quarterSize = Math.floor(size / 4);
    ctx.fillStyle = Colors.red;
    ctx.beginPath();
    ctx.moveTo(cx, cy + halfSize);

    ctx.bezierCurveTo(
      cx,
      cy,
      cx + quarterSize,
      cy,
      cx + halfSize,
      cy + quarterSize
    );

    ctx.bezierCurveTo(
      cx + halfSize + quarterSize,
      cy,
      cx + size,
      cy,
      cx + size,
      cy + halfSize
    );

    ctx.lineTo(cx + halfSize, cy + size);
    ctx.lineTo(cx, cy + halfSize);
    ctx.fill();
  }

  private drawSpade(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    size: number
  ) {
    const halfSize = Math.floor(size / 2);
    const quarterSize = Math.floor(size / 4);
    const eighthSize = Math.floor(size / 8);
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(cx + halfSize, cy);
    ctx.lineTo(cx, cy + halfSize);
    ctx.quadraticCurveTo(cx, cy + size, cx + halfSize, cy + size - quarterSize);
    ctx.quadraticCurveTo(cx + size, cy + size, cx + size, cy + halfSize);
    ctx.lineTo(cx + halfSize, cy);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx + halfSize - eighthSize, cy + halfSize);
    ctx.lineTo(cx + halfSize - eighthSize, cy + size);
    ctx.lineTo(cx + halfSize + eighthSize, cy + size);
    ctx.lineTo(cx + halfSize + eighthSize, cy + halfSize);
    ctx.lineTo(cx + halfSize - eighthSize, cy + halfSize);
    ctx.fill();
  }

  private drawClub(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    size: number
  ) {
    const halfSize = Math.floor(size / 2);
    const quarterSize = Math.floor(size / 4);
    const eighthSize = Math.floor(size / 8);
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.arc(cx + halfSize, cy + quarterSize, quarterSize, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + quarterSize, cy + halfSize, quarterSize, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      cx + size - quarterSize,
      cy + halfSize,
      quarterSize,
      0,
      2 * Math.PI
    );
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cx + halfSize - eighthSize, cy + quarterSize);
    ctx.lineTo(cx + halfSize - eighthSize, cy + size - eighthSize);
    ctx.lineTo(cx + halfSize + eighthSize, cy + size - eighthSize);
    ctx.lineTo(cx + halfSize + eighthSize, cy + quarterSize);
    ctx.lineTo(cx + halfSize - eighthSize, cy + quarterSize);
    ctx.fill();
  }
}
