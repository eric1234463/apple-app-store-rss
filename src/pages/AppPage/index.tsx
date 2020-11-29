import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import styled from '../../utils/styled';
import { IApp } from '../../interfaces/api/app';
import AppSuggestionCard from '../../components/AppSuggestionCard';
import AppInfoCard from '../../components/AppInfoCard';
import SearchBar from '../../components/SearchBar';
import { State } from '../../interfaces/state';
import { useDispatch } from '../../application/store/effects';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 100%;
  width: 100%;
`;

const SuggestAppWrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  border-bottom: 2px solid ${({ theme }) => theme.colors.GREY_100};
  padding: 1rem;
  box-sizing: border-box;
`;

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  scroll-behavior: smooth;
  overflow-x: scroll;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const SwrAppPage = () => {
  const dispatch = useDispatch()
  const { items: apps, page: appPage } = useSelector<State, State['app']>(state => state.app)
  const { items: suggestionApps, page: suggestionAppPage } = useSelector<State, State['suggestionApp']>(state => state.suggestionApp)

  const handleSuggestionAppOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollWidth - event.currentTarget.scrollLeft === event.currentTarget.clientWidth) {
      getSuggestionApp(suggestionAppPage + 1);
    }
  }

  const handleAppOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight) {
      getApp(appPage + 1);
    }
  }

  const getApp = (page: number) => {
    dispatch({
      type: 'GET_APPS_REQUEST',
      payload: {
        page,
      }
    })
  }

  const getSuggestionApp = (page: number) => {
    dispatch({
      type: 'GET_SUGGESTION_APPS_REQUEST',
      payload: {
        page,
      }
    })
  }

  useEffect(() => {
    getSuggestionApp(1)
    getApp(1);
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps


  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const text = event.target.value;
    // mutateSuggestionApps(suggestionApps?.filter(suggestionApp => suggestionApp.name.includes(text) || suggestionApp.genres.find(genre => genre.name.includes(text))))
    // mutateApps(apps?.filter(suggestionApp => suggestionApp.name.includes(text) || suggestionApp.genres.find(genre => genre.name.includes(text))))
  }

  return (
    <Wrapper>
      <SearchBar placeholder="&#xF002; Search" onChange={handleOnSearch} />
      <SuggestAppWrapper onScroll={handleSuggestionAppOnScroll}>
        {suggestionApps?.map((element, index) => (
          <AppSuggestionCard
            key={`${element.name}-${index}`}
            name={element.name}
            avatarUrl={element.artworkUrl100}
            genres={element.genres.map<string>((genres) => genres.name)}
          ></AppSuggestionCard>
        ))}
      </SuggestAppWrapper>
      <AppWrapper onScroll={handleAppOnScroll}>
        {apps?.map((element, index) => (
          <AppInfoCard
            key={`${element.name}-${index}`}
            name={element.name}
            avatarUrl={element.artworkUrl100}
            genres={element.genres.map<string>((genres) => genres.name)}
            rank={index + 1}
          ></AppInfoCard>
        ))}
      </AppWrapper>
    </Wrapper>
  )
}

export default SwrAppPage;
