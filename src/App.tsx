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
`;

const CanvasGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 128px 128px 128px 128px 128px;
  justify-content: center;
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
