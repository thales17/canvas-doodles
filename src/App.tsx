import * as React from "react";

import styled from "styled-components";

import Canvas from "./Canvas";

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

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>Canvas Doodles</AppTitle>
        </AppHeader>
        <Canvas />
      </AppContainer>
    );
  }
}

export default App;
