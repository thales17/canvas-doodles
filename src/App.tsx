import * as React from "react";

import styled from "styled-components";

import CanvasGrid from "./CanvasGrid";

import CanvasTV from "./CanvasTV";

import { BrowserRouter as Router, Route} from "react-router-dom";

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
      <Router>
      <AppContainer>
        <AppHeader>
          <AppTitle>Canvas Doodles</AppTitle>
        </AppHeader>
        <Route path="/" exact={true} component={CanvasGrid} />
        <Route path="/canvas/" component={CanvasTV} />
      </AppContainer>
      </Router>
    );
  }
}

export default App;
