import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const GifContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/background2.gif') no-repeat center center;
  background-size: cover;
  opacity: 0.5; // Adjust this value to change the GIF opacity
`;

function BackgroundLayers() {
  return (
    <Container>
      <GifContainer />
    </Container>
  );
}

export default BackgroundLayers;