import * as React from "react";

import styled from "styled-components";

import Canvas from "./Canvas";

import DoodleList from "./Doodles/DoodleList";

const CanvasContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Grid = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  justify-content: center;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, 128px);
`;

class CanvasGrid extends React.Component {
  public render() {
    return (
      <CanvasContainer>
        <Grid>
          {DoodleList.map((doodle, index) => {
            return (
              <a key={index} href={"/canvas/" + index}>
                <Canvas doodle={doodle} />
              </a>
            );
          })}
        </Grid>
      </CanvasContainer>
    );
  }
}

export default CanvasGrid;
