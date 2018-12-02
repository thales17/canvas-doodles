import Doodle from "./Doodle";

import { RandomColor } from "./Colors";
import { Point } from "./Point";
import { TreeNode } from "./TreeNode";

const screenSize = 128;

export class DailyDoodle implements Doodle {
  private tree: TreeNode;
  public init() {
    this.tree = this.createTreeNode(new Point(64, 80), 12);
  }

  public update() {
    // nop
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.beginPath();
    ctx.strokeStyle = RandomColor();
    ctx.lineWidth = 2;
    ctx.moveTo(64, 128);

    this.lineToNode(ctx, this.tree);

    ctx.stroke();
  }

  private createTreeNode(p: Point, branchLength: number): TreeNode {
    const n = new TreeNode(new Point(p.x, p.y));
    if (branchLength <= 0) {
      return n;
    }
    if (p.x - branchLength >= 0) {
      n.leftChild = this.createTreeNode(
        new Point(p.x - branchLength, p.y - branchLength),
        branchLength - 2
      );
    }
    if (p.x + branchLength <= screenSize) {
      n.rightChild = this.createTreeNode(
        new Point(p.x + branchLength, p.y - branchLength),
        branchLength - 2
      );
    }

    return n;
  }

  private lineToNode(ctx: CanvasRenderingContext2D, node: TreeNode) {
    ctx.lineTo(node.point.x, node.point.y);
    if (node.leftChild) {
      this.lineToNode(ctx, node.leftChild);
    }
    ctx.moveTo(node.point.x, node.point.y);
    if (node.rightChild) {
      this.lineToNode(ctx, node.rightChild);
    }
  }
}
