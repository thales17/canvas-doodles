import Doodle from "./Doodle";

import { RandomColor } from "./Colors";

const screenSize = 128;

export class DailyDoodle implements Doodle {
  public init() {
    // nop
  }

  public update() {
    // nop
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < screenSize * screenSize; i++) {
      const dice = Math.ceil(Math.random() * 10);
      if (dice < 3) {
        const x = i % screenSize;
        const y = Math.floor(i / screenSize);
        ctx.fillStyle = RandomColor();
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}
