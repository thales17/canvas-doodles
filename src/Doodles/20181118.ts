import Doodle from "./Doodle";

import { Point } from "./Point";

import { Colors } from "./Colors";

const screenSize = 128;
const gridCount = 16;
const gridSize = screenSize / gridCount;
const frameCount = 1;

export class DailyDoodle implements Doodle {
  private cells: Point[];
  private index: number;
  private frame: number;
  private colors: string[];

  public init() {
    this.cells = [];
    this.colors = [
      Colors.black,
      Colors.darkBlue,
      Colors.darkGrey,
      Colors.darkPurple,
      Colors.brown,
      Colors.indigo,
      Colors.darkGreen,
      Colors.red,
      Colors.orange,
      Colors.pink,
      Colors.yellow,
      Colors.green,
      Colors.blue,
      Colors.peach,
      Colors.lightGrey,
      Colors.white
    ];
    this.index = 0;
    this.frame = 0;

    for (let i = 0; i < gridCount * gridCount; i++) {
      let r = i % gridCount;
      const c = Math.floor(i / gridCount);

      if (c % 2 === 1) {
        r = gridCount - r;
      }

      const p = new Point(c, r);

      this.cells.push(p);
    }
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.index++;
      if (this.index >= gridCount * gridCount) {
        this.index = 0;
      }
      this.frame = 0;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    for (let i = 0; i < this.index; i++) {
      ctx.fillStyle = this.colors[i % this.colors.length];
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.fillRect(
        this.cells[i].x * gridSize,
        this.cells[i].y * gridSize,
        gridSize,
        gridSize
      );
    }
  }
}
