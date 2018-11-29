export function drawHex(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number
) {
  const v1 = 0.866;
  const v2 = 0.5;
  ctx.beginPath();
  ctx.moveTo(r + x, y);
  ctx.lineTo(r * v2 + x, r * v1 + y);
  ctx.lineTo(r * v2 * -1 + x, r * v1 + y);
  ctx.lineTo(r * -1 + x, y);
  ctx.lineTo(r * v2 * -1 + x, r * v1 * -1 + y);
  ctx.lineTo(r * v2 + x, r * v1 * -1 + y);
  ctx.lineTo(r + x, y);

  ctx.fill();
}
