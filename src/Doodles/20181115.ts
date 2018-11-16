import Doodle from "./Doodle";

import { Point } from "./Point";

import { RandomColor } from "./Colors";

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
    this.colors = [];
    this.index = 0;
    this.frame = 0;
    const doneCells: string[] = [];

    for (let i = 0; i < gridCount * gridCount; i++) {
      const p = new Point(
        Math.floor(gridCount * Math.random()),
        Math.floor(gridCount * Math.random())
      );

      while (doneCells.indexOf(`${p.x},${p.y}`) !== -1) {
        p.x = Math.floor(gridCount * Math.random());
        p.y = Math.floor(gridCount * Math.random());
      }

      doneCells.push(`${p.x},${p.y}`);
      this.cells.push(p);
      this.colors.push(RandomColor());
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
      ctx.fillStyle = this.colors[i];
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
