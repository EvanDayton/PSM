import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #333;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const RightColumn = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #5b788e;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProcessItem = styled.div`
  background-color: ${props => props.isActive ? '#fff' : '#e0e0e0'};
  padding: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: 1px solid #ccc;
`;

function ServicesPage() {
  const [activeProcess, setActiveProcess] = useState(null);

  const processes = [
    { id: '01', title: 'Intake & Discovery' },
    { id: '02', title: 'Strategy & Workshops' },
    { id: '03', title: 'Test Project' },
    { id: '04', title: 'Retainer' }
  ];

  return (
    <PageContainer>
      <Navigation />
      <ContentContainer>
        <LeftColumn>
          <Logo src="/path-to-your-logo.png" alt="PSM Logo" />
          <Title>Agency Services</Title>
          <Subtitle>How We Work</Subtitle>
          <Text>We're more than an agency. We're your partner.</Text>
        </LeftColumn>
        <RightColumn>
          <Text>
            We've worked with dozens of companies as true strategic partners to position and launch
            products and brands, manage cross-functional teams, and keep things aligned and on track.
            Because of this, we've learned over the years what works (and what doesn't!).
          </Text>
          <Subtitle>Our Process</Subtitle>
          <Text>Product Marketing & Sales Enablement projects</Text>
          {processes.map((process) => (
            <ProcessItem 
              key={process.id}
              isActive={activeProcess === process.id}
              onClick={() => setActiveProcess(activeProcess === process.id ? null : process.id)}
            >
              {process.id} {process.title}
            </ProcessItem>
          ))}
        </RightColumn>
      </ContentContainer>
      <Footer />
      <CustomCursor />
    </PageContainer>
  );
}

export default ServicesPage;