import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedTitle from './AnimatedTitle';
import logo from '../logo.png';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 25vh;
  color: #fff;
  text-align: left;
  max-width: 800px;
  margin-left: 5%;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 200%;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.17rem;
  line-height: 1.8;
  margin-top: 2rem;
  font-weight: 300;
  position: absolute;
  top: 32%;
  right: -46%;
  max-width: 600px;
  text-align: left;
  letter-spacing: 1.2px;
`;

const underlineAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const ScrollLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  position: absolute;
  top: 30%;
  right: 500px;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  position: fixed;
  top: 15px;
  left: 10px;
  z-index: 10;
`;

const LogoImage = styled.img`
  filter: invert(100%);
  width: 150px;
  height: auto;
  cursor: pointer;
`;

function ContentSection() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LogoContainer>
        <LogoImage src={logo} alt="Company Logo" />
      </LogoContainer>
      <Section>
        <TitleWrapper>
          <AnimatedTitle />
        </TitleWrapper>
        <Subtitle>
          We are a digital marketing agency based in Denver that strives to ensure that our services not only deliver a complete result of high quality but also an innovative solution that can improve your business.
        </Subtitle>
        <ScrollLink href="#about-section" onClick={scrollToAbout}>
          What can we offer you? ↓
        </ScrollLink>
      </Section>
    </>
  );
}

export default ContentSection;