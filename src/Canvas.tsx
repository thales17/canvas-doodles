import * as React from "react";

import styled from "styled-components";

const Container = styled.div`
  border: 1px solid white;
  width: 128px;
  height: 128px;
  :first-child {
  }
`;

class Canvas extends React.Component {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D | null;
  private x = 0;

  constructor(props: object) {
    super(props);
    this.canvasRef = React.createRef();
    this.animate = this.animate.bind(this);
  }

  public componentDidMount() {
    if (!this.canvasRef.current) {
      return;
    }

    this.ctx = this.canvasRef.current.getContext("2d");

    requestAnimationFrame(this.animate);
  }

  public render() {
    return (
      <Container>
        <canvas width={128} height={128} ref={this.canvasRef} />
      </Container>
    );
  }

  private animate() {
    if (!this.ctx) {
      return;
    }
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 128, 128);

    this.ctx.fillStyle = "white";

    this.ctx.fillRect(this.x, 64, 5, 5);

    this.x++;

    if (this.x > 128) {
      this.x = 0;
    }
    requestAnimationFrame(this.animate);
  }
}

export default Canvas;
