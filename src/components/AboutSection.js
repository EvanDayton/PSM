import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ivory;
  padding: 150px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const BigTextContainer = styled.div`
  flex: 1;
  font-size: 3.5rem;
  font-weight: bold;
  color: #5b788e;
  padding-right: 40px;
  line-height: 1.2;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

function AboutSection() {
  return (
    <SectionContainer id="about-section">
      <InnerContainer>
        <BigTextContainer>
          What does "good people creating great work" mean to you?
        </BigTextContainer>
        <ContentContainer>
          <Paragraph>
            <Title>People-First Culture</Title>
            <Text>
              Our team is diverse in backgrounds and experiences yet united in a culture that celebrates our unique perspectives and well-rounded points of view, keeping our ideas fresh. Our people-first culture helps keep our team attrition rate low (18% versus the 30% industry standard). This gives us more institutional knowledge of each client's business and continuous momentum.
            </Text>
          </Paragraph>
          <Paragraph>
            <Title>A True Extension of Your Team</Title>
            <Text>
              We're proud of our independence. We're not accountable to a holding company or shareholders — just to our clients. This allows us to stay nimble in both our approach and our ability to invest in innovation, creating new services and tools to meet the ever-changing needs of our clients.
            </Text>
          </Paragraph>
        </ContentContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

export default AboutSection;