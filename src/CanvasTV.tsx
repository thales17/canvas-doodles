import * as React from "react";

import styled from "styled-components";

import Canvas from "./Canvas";

import DoodleList from "./Doodles/DoodleList";

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

class CanvasTV extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { index: 0 };
    this.incrementIndex = this.incrementIndex.bind(this);
    this.decrementIndex = this.decrementIndex.bind(this);
  }

  public render() {
    return (
      <CanvasContainer>
        <StyledCanvas doodle={DoodleList[this.state.index]} />
        <div>
          <button onClick={this.decrementIndex} />
          <button onClick={this.incrementIndex} />
        </div>
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
