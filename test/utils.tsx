import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/utils/styled';

export const renderStyledComponent = ({ Component, props }) =>
  render(
    <ThemeProvider theme={theme}>
      <Component {...props }/>
    </ThemeProvider>
  );
