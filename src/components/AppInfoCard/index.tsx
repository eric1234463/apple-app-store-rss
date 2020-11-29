import React, { FC } from 'react';
import StarRatings from 'react-star-ratings';
import styled, { theme } from '../../utils/styled';

interface IProps {
  rank: number;
  name: string;
  genres: string[];
  avatarUrl: string;
}

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.GREY_100};
`;

const Rank = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 60px;
  line-height: 4.375rem;
  color: ${({ theme }) => theme.colors.GREY_200};
  text-align: center;
`;

const Avatar = styled.img<{ index: number }>`
  border-radius: ${({ index }) => index % 2 ? '8px' : '50%'};
  height: 4.375rem;
  width: 4.375rem;
`;

const InfoSection = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  > h1 {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.BLACK};
    padding: 0;
    margin: 0;
  }

  > span {
    display: flex;
    font-size: 0.75rem;
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors.GREY_200};
  }
`;

const StarRatingWrapper = styled.div`
  padding-top: 0.25rem;
  display: flex;

  > span {
    color: ${({ theme }) => theme.colors.GREY_200};
    font-size: 0.75rem;
    padding-left: 0.25rem;
  }
`;


const AppInfoCard: FC<IProps> = ({ rank, name, genres, avatarUrl }) => {
  return (
    <Wrapper>
      <Rank>{rank}</Rank>
      <Avatar src={avatarUrl} index={rank}></Avatar>
      <InfoSection>
        <h1>{name}</h1>
        <span>{genres.join('和')}</span>
        <StarRatingWrapper>
          <StarRatings
            rating={2}
            starRatedColor={theme.colors.YELLOW_100}
            numberOfStars={5}
            name='rating'
            starDimension="16"
            starSpacing="0"
          />
          <span>({Math.round(Math.random() * 100)})</span>
        </StarRatingWrapper>
      </InfoSection>
    </Wrapper>
  )
}

export default AppInfoCard;
