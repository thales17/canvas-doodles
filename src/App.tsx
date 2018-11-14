import * as React from "react";

import styled from "styled-components";

import Canvas from "./Canvas";

import DoodleList from "./Doodles/DoodleList";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 4rem;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 2em;
`;

const CanvasContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const CanvasGrid = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  justify-content: center;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, 128px);
`;

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>Canvas Doodles</AppTitle>
        </AppHeader>
        <CanvasContainer>
          <CanvasGrid>
            {DoodleList.map((doodle, index) => {
              return <Canvas key={index} doodle={doodle} />;
            })}
          </CanvasGrid>
        </CanvasContainer>
      </AppContainer>
    );
  }
}

export default App;
