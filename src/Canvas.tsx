import * as React from "react";

import styled from "styled-components";

import Doodle from "./Doodles/Doodle";

const Container = styled.div`
  border: 1px solid white;
  width: 128px;
  height: 128px;
`;

interface Props {
  doodle: Doodle;
  className?: string;
  children?: React.ReactNode;
}

class Canvas extends React.Component<Props, object> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D | null;
  private rID: number | null;
  private frameCount: number = 0;
  constructor(props: Props) {
    super(props);
    this.canvasRef = React.createRef();
    this.animate = this.animate.bind(this);
  }

  public componentDidMount() {
    if (!this.canvasRef.current) {
      return;
    }

    this.ctx = this.canvasRef.current.getContext("2d");
    this.props.doodle.init();
    this.rID = requestAnimationFrame(this.animate);
  }

  public componentDidUpdate() {
    this.props.doodle.init();
  }

  public componentWillUnmount() {
    if (this.rID) {
      cancelAnimationFrame(this.rID);
    }
  }

  public render() {
    return (
      <Container className={this.props.className}>
        <canvas width={128} height={128} ref={this.canvasRef} />
        {this.props.children}
      </Container>
    );
  }

  private animate() {
    if (!this.ctx) {
      return;
    }

    this.props.doodle.update();
    this.props.doodle.draw(this.ctx);
    if (this.canvasRef.current && this.frameCount < 300) {
      this.frameCount++;
      // tslint:disable-next-line:no-console
      // console.log("frame_" + this.frameCount);
      // tslint:disable-next-line:no-console
      // console.log(this.canvasRef.current.toDataURL("image/png"));
    }

    this.rID = requestAnimationFrame(this.animate);
  }
}

export default Canvas;
