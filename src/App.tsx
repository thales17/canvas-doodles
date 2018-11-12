import * as React from "react";

import styled from "styled-components";

import logo from "./logo.svg";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppLogo = styled.img`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`;

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppContainer>
    );
  }
}

export default App;
