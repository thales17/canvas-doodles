import { Point } from "./Point";

export class TreeNode {
  public point: Point;
  public leftChild?: TreeNode;
  public rightChild?: TreeNode;
  constructor(p: Point) {
    this.point = p;
  }
}
