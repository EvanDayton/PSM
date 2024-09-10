import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

function LoadingAnimation() {
  return (
    <LoadingContainer>
      <Logo>PSM</Logo>
      <Circle />
    </LoadingContainer>
  );
}

export default LoadingAnimation;