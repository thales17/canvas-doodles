import * as React from "react";

import styled from "styled-components";

import Canvas from "./Canvas";

import DoodleList from "./Doodles/DoodleList";

import { RouteComponentProps } from "react-router-dom";

const size = 128;
const CanvasContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCanvas = styled(Canvas)`
  width: ${size}px;
  height: ${size}px;
  canvas {
    width: ${size}px;
    height: ${size}px;
  }
`;

interface State {
  index: number;
}

class CanvasTV extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    const doodleIndex = props.match.params.doodleIndex;
    this.state = { index: doodleIndex ? doodleIndex : 0 };
    this.incrementIndex = this.incrementIndex.bind(this);
    this.decrementIndex = this.decrementIndex.bind(this);
  }

  public render() {
    return (
      <CanvasContainer>
        <StyledCanvas doodle={DoodleList[this.state.index]} />
      </CanvasContainer>
    );
  }

  private decrementIndex() {
    let nextIndex = this.state.index - 1;

    if (nextIndex < 0) {
      nextIndex = DoodleList.length - 1;
    }
    this.setState({ index: nextIndex });
  }

  private incrementIndex() {
    let nextIndex = this.state.index + 1;

    if (nextIndex >= DoodleList.length) {
      nextIndex = 0;
    }

    this.setState({ index: nextIndex });
  }
}

export default CanvasTV;
