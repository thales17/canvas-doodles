import Doodle from "./Doodle";

import { Colors } from "./Colors";
import { drawHex } from "./Hex";

const screenSize = 128;
const size = 8;
const halfSize = size / 2;
const gridCount = screenSize / size + 1;
const frameCount = 5;

export class DailyDoodle implements Doodle {
  private order: number[] = [];
  private frame: number = 0;
  private index = 0;
  public init() {
    for (let i = 0; i < gridCount * gridCount * 2; i++) {
      let dice = Math.floor(gridCount * gridCount * 2 * Math.random());
      while (this.order.indexOf(dice) !== -1) {
        dice = Math.floor(gridCount * gridCount * 2 * Math.random());
      }
      this.order.push(dice);
    }
  }

  public update() {
    this.frame++;
    if (this.frame <= frameCount) {
      this.frame = 0;
      this.index++;
      this.index %= gridCount * gridCount * 2;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < gridCount * gridCount * 2; i++) {
      const passed = this.order.slice(0, this.index + 1);
      if (passed.indexOf(i) === -1) {
        ctx.fillStyle = Colors.lightGrey;
      } else {
        ctx.fillStyle = Colors.red;
      }

      const c = i % gridCount;
      const r = Math.floor(i / gridCount);
      if (r % 2 === 0) {
        if (c % 2 === 0) {
          drawHex(ctx, c * size, r * halfSize, halfSize);
        }
      } else {
        if (c % 2 === 1) {
          drawHex(ctx, c * size, r * halfSize, halfSize);
        }
      }
    }
  }
}
