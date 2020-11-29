import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import styled, { theme } from './utils/styled';
import SwrAppPage from './pages/SwrAppPage';


const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    background-color: black;
  }
`;
const Wrapper = styled.div`
  width: 48rem;
  height: 800px;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Wrapper>
          <Route path="/" component={SwrAppPage} />
        </Wrapper>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
