import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;
const gridCount = 32;
const gridSize = screenSize / gridCount;
const frameCount = 5;
const resetIterations = 10;

export class DailyDoodle implements Doodle {
  private cells: boolean[];
  private frame: number;
  private iterationCount: number;

  public init() {
    this.reset();
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.applyRules();
      this.frame = 0;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.cells.length; i++) {
      if (!this.cells[i]) {
        continue;
      }
      const x = i % gridCount;
      const y = Math.floor(i / gridCount);
      ctx.fillStyle = Colors.darkGreen;
      ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }

  private reset() {
    this.cells = [];
    this.frame = 0;
    this.iterationCount = 0;

    for (let i = 0; i < gridCount * gridCount; i++) {
      const dice = Math.floor(Math.random() * 10);
      this.cells.push(dice > 7);
    }
  }

  private applyRules() {
    if (this.iterationCount >= resetIterations) {
      this.reset();
      return;
    }

    const neighborScore = (idx: number): number => {
      const x = idx % gridCount;
      const y = Math.floor(idx / gridCount);
      let score = 0;
      const neighborIdxes: number[] = [
        /* NW */ x - 1 + (y - 1) * gridCount,
        /* N */ x + (y - 1) * gridCount,
        /* NE */ x + 1 + (y - 1) * gridCount,
        /* W */ x - 1 + y * gridCount,
        /* E */ x + 1 + y * gridCount,
        /* SW */ x - 1 + (y + 1) * gridCount,
        /* S */ x + (y + 1) * gridCount,
        /* SE */ x + 1 + (y + 1) * gridCount
      ];

      for (const i of neighborIdxes) {
        if (i < 0 || i > this.cells.length) {
          continue;
        }
        score += this.cells[i] ? 1 : 0;
      }

      return score;
    };

    for (let i = 0; i < this.cells.length; i++) {
      const score = neighborScore(i);
      const alive = this.cells[i];
      if (alive) {
        if (score < 2 || score > 3) {
          this.cells[i] = false;
        }
      } else {
        if (score === 3) {
          this.cells[i] = true;
        }
      }
    }

    this.iterationCount++;
  }
}
