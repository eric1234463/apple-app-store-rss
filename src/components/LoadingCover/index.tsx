import React, { FC } from 'react';
import { keyframes } from 'styled-components';
import styled from '../../utils/styled';

const loadingEffect = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.colors.GREY_200};
    opacity: 1;
    border-radius: 50%;
    animation: ${loadingEffect} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

`;

const Backdrop = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.WHITE};
  opacity: 0.5;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
`;


const LoadingCover: FC = () => {
  return (
    <>
      <Backdrop></Backdrop>
      <LoadingSpinner><div></div><div></div></LoadingSpinner>
    </>
  )
}

export default LoadingCover;
