import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr'
import styled from '../../utils/styled';
import { IApp } from '../../interfaces/api/app';
import AppSuggestionCard from '../../components/AppSuggestionCard';
import AppInfoCard from '../../components/AppInfoCard';
import SearchBar from '../../components/SearchBar';

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
  const [suggestionPageIndicator, setSuggestionPageIndicator] = useState(1);
  const [appPageIndicator, setAppPageIndicator] = useState(1);

  const { data: apps, mutate: mutateApps } = useSWR<IApp[]>(`api/apps?page=${appPageIndicator}`);
  const { data: suggestionApps, mutate: mutateSuggestionApps } = useSWR<IApp[]>(`api/suggestion_apps?page=${suggestionPageIndicator}`);

  const handleSuggestionAppOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollWidth - event.currentTarget.scrollLeft === event.currentTarget.clientWidth) {
      setSuggestionPageIndicator(suggestionPageIndicator + 1)
    }
  }

  const handleAppOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight) {
      setAppPageIndicator(appPageIndicator + 1)
    }
  }

  useEffect(() => {
    if (suggestionApps) {
      mutateSuggestionApps(suggestionApps);
    }
  }, [mutateSuggestionApps, suggestionApps])

  useEffect(() => {
    if (apps) {
      mutateApps(apps);
    }
  }, [mutateApps, apps])

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const text = event.target.value;
    // mutateSuggestionApps(suggestionApps?.filter(suggestionApp => suggestionApp.name.includes(text) || suggestionApp.genres.find(genre => genre.name.includes(text))))
    // mutateApps(apps?.filter(suggestionApp => suggestionApp.name.includes(text) || suggestionApp.genres.find(genre => genre.name.includes(text))))
  }

  return (
    <Wrapper>
      <SearchBar placeholder="&#xF002; Search" onChange={handleOnSearch} />
      <SuggestAppWrapper onScroll={handleSuggestionAppOnScroll}>
        {suggestionApps?.map((element) => (
          <AppSuggestionCard
            key={element.name}
            name={element.name}
            avatarUrl={element.artworkUrl100}
            genres={element.genres.map<string>((genres) => genres.name)}
          ></AppSuggestionCard>
        ))}
      </SuggestAppWrapper>
      <AppWrapper onScroll={handleAppOnScroll}>
        {apps?.map((element, index) => (
          <AppInfoCard
            key={element.name}
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
