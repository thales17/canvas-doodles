interface Doodle {
  init(): void;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export default Doodle;
