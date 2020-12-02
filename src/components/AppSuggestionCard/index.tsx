import React, { FC } from 'react';
import styled from '../../utils/styled';

interface IProps {
  name: string;
  genres: string[];
  avatarUrl: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  margin-right: 0.5rem;

  > div {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    padding-top: 0.125rem;
  }

  > span {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    font-size: 0.75rem;
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors.GREY_200};
  }
`;

const Avatar = styled.img`
  border-radius: 8px;
  height: 4.375rem;
  width: 4.375rem;
`;


const AppSuggestionCard: FC<IProps> = ({ name, genres, avatarUrl }) => {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} data-testid="avatar"></Avatar>
      <div data-testid="name">{name}</div>
      <span data-testid="category">{genres.join('和')}</span>
    </Wrapper>
  )
}

export default AppSuggestionCard;
