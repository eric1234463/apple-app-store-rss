import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppSuggestionCard from '.';
import { renderStyledComponent } from '../../../test/utils';

test('renders AppSuggestionCard with only one genres', () => {
  const props = {
    name: 'eric',
    avatarUrl: 'https://lh3.googleusercontent.com/proxy/slGD5ysNWP1MWJlWSXqT6dn6cUIrOVtTfx4k_uze3lakSrvmcP_vIcT_5QWAKYUFdksf8evtJ3HC70cYzs4zW8cCY97SfnpvzNAnGxsAA0Mg',
    genres: ['Entertainment']
  }
  renderStyledComponent({ Component: AppSuggestionCard, props })
  const avatarElement = screen.getByTestId('avatar')
  expect(avatarElement.src).toEqual(props.avatarUrl)
  const nameElement = screen.getByTestId('name')
  expect(nameElement.innerHTML).toEqual(props.name)
  const categoryElement = screen.getByTestId('category')
  expect(categoryElement.innerHTML).toEqual(props.genres[0])
})


test('renders AppSuggestionCard with only mutiple genres', () => {
  const props = {
    name: 'eric',
    avatarUrl: 'https://lh3.googleusercontent.com/proxy/slGD5ysNWP1MWJlWSXqT6dn6cUIrOVtTfx4k_uze3lakSrvmcP_vIcT_5QWAKYUFdksf8evtJ3HC70cYzs4zW8cCY97SfnpvzNAnGxsAA0Mg',
    genres: ['Entertainment', 'Social']
  }
  renderStyledComponent({ Component: AppSuggestionCard, props })
  const avatarElement = screen.getByTestId('avatar')
  expect(avatarElement.src).toEqual(props.avatarUrl)
  const nameElement = screen.getByTestId('name')
  expect(nameElement.innerHTML).toEqual(props.name)
  const categoryElement = screen.getByTestId('category')
  expect(categoryElement.innerHTML).toEqual(props.genres.join('和'))
})

