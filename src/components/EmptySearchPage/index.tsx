import React, { FC } from 'react';
import styled, { theme } from '../../utils/styled';
import EmptySearchIcon from '../Icons/EmptySearchIcon';

interface IProps {
  height: number;
}

const Wrapper = styled.div<IProps>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  display: flex;
  color: ${({ theme }) => theme.colors.GREY_200};
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    svg {
      text-align: center;
      width: ${({ height }) => `${height / 3}px`};
    }

    strong {
      padding: 0.5rem 0;
    }
  }
`;

const EmptySearchPage: FC<IProps> = (props) => {
  return (
    <Wrapper {...props}>
      <div>
        <EmptySearchIcon color={theme.colors.GREY_200} />
        <strong data-testid="header">No Match Search Results</strong>
        <div data-testid="description">Try again other keywords</div>
      </div>
    </Wrapper>
  )
}

export default EmptySearchPage;
