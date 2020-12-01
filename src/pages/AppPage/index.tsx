import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import styled from '../../utils/styled';
import AppSuggestionCard from '../../components/AppSuggestionCard';
import AppInfoCard from '../../components/AppInfoCard';
import SearchBar from '../../components/SearchBar';
import { State } from '../../interfaces/state';
import { useDispatch } from '../../application/store/effects';
import LoadingCover from '../../components/LoadingCover';
import EmptySearchPage from '../../components/EmptySearchPage';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  height: 100%;
  width: 100%;
  position: relative;
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
  position: relative;
`;

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.WHITE};
  scroll-behavior: smooth;
  overflow-x: scroll;
  width: 100%;
  height: calc(100% - 189px);
  box-sizing: border-box;
  position: relative;
`;

const SwrAppPage = () => {
  const dispatch = useDispatch()
  const { items: appsData, page: appPage, isLoading: isAppDataLoading } = useSelector<State, State['app']>(state => state.app)
  const { items: suggestionAppsData, page: suggestionAppPage, isLoading: isSuggestionAppDataLoading } = useSelector<State, State['suggestionApp']>(state => state.suggestionApp)

  const appWrapper = useRef<HTMLDivElement>(null);
  const suggestionAppWrapper = useRef<HTMLDivElement>(null);

  const [suggestionApps, setSuggestionApps] = useState(suggestionAppsData)
  const [apps, setApps] = useState(appsData)

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
    setApps(appsData)
  }, [appsData])


  useEffect(() => {
    setSuggestionApps(suggestionAppsData)
  }, [suggestionAppsData])

  useEffect(() => {
    getSuggestionApp(1)
    getApp(1);
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps


  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (text.length === 0) {
      setApps(appsData);
      setSuggestionApps(suggestionAppsData);
    } else {
      setSuggestionApps(suggestionApps?.filter(suggestionApp => suggestionApp.name.includes(text) || suggestionApp.artistName.includes(text) || suggestionApp.genres.find(genre => genre.name.includes(text))))
      setApps(apps?.filter(app => app.name.includes(text) || app.artistName.includes(text) || app.genres.find(genre => genre.name.includes(text))))
    }
  }
  return (
    <Wrapper>
      <SearchBar placeholder="&#xF002; Search" onChange={handleOnSearch} />
      <SuggestAppWrapper onScroll={handleSuggestionAppOnScroll} ref={suggestionAppWrapper}>
        {suggestionApps.length > 0 && suggestionApps?.map((element, index) => (
          <AppSuggestionCard
            key={`${element.name}-${index}`}
            name={element.name}
            avatarUrl={element.artworkUrl100}
            genres={element.genres.map<string>((genres) => genres.name)}
          ></AppSuggestionCard>
        ))}
        {!isSuggestionAppDataLoading && suggestionApps.length === 0 && <EmptySearchPage height={107} />}
      </SuggestAppWrapper>
      <AppWrapper onScroll={handleAppOnScroll} ref={appWrapper}>
        {apps.length > 0 && apps?.map((element, index) => (
          <AppInfoCard
            key={`${element.name}-${index}`}
            name={element.name}
            avatarUrl={element.artworkUrl100}
            genres={element.genres.map<string>((genres) => genres.name)}
            rank={index + 1}
          ></AppInfoCard>
        ))}
        {!isAppDataLoading && apps.length === 0 && <EmptySearchPage height={611} />}

      </AppWrapper>
      {(isAppDataLoading || isSuggestionAppDataLoading) && <LoadingCover />}
    </Wrapper>
  )
}

export default SwrAppPage;
