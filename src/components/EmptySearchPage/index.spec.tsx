import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EmptySearchPage from '.';
import { renderStyledComponent } from '../../../test/utils';

test('renders EmptySearchPage', () => {
  renderStyledComponent({ Component: EmptySearchPage, props: {} })
  const headerElement = screen.getByTestId('header')
  expect(headerElement.innerHTML).toEqual('No Match Search Results')
  const descriptionElement = screen.getByTestId('description')
  expect(descriptionElement.innerHTML).toEqual('Try again other keywords')
})

