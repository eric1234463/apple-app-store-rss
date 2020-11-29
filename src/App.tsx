import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import styled, { theme } from './utils/styled';
import AppPage from './pages/AppPage';
import createApi from './utils/createApi';
import configureStore from './application/store/configureStore';


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
  const api = createApi();
  const store = configureStore({
    context: {
      api,
    },
  });

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper>
            <Route path="/" component={AppPage} />
          </Wrapper>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
