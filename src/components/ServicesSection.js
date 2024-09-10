import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Ensure you have the correct path to your logo

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 50px 0;
  color: #fff;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 50px;
  padding: 40px;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #5b788e;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProcessItem = styled.div`
  background-color: ${props => props.isActive ? '#fff' : '#e0e0e0'};
  color: #333;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const ProcessContent = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  margin-top: 10px;
  border-radius: 5px;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

function ServicesSection() {
  const [activeProcess, setActiveProcess] = useState(null);

  const processes = [
    { id: '01', title: 'Intake & Discovery', content: 'We begin by understanding who you are targeting, what you are selling, and where you are heading, in order to plan the overall approach, timeline and process.' },
    { id: '02', title: 'Strategy & Workshops', content: "We then lead your team through a series of strategic marketing workshops. These help us build a strong foundation for us to execute from and uplevel your team's understanding and strategy." },
    { id: '03', title: 'Test Project', content: "We like to start with a Test project with limited scope to see if there is a good fit between both teams, meaning that collaboration and communication flow as expected and that you're happy with our work." },
    { id: '04', title: 'Retainer', content: "Once the Test project is complete and we're both comfortable with the relationship, we propose to move to a monthly retainer model with a defined throughput where we agree on priorities and deliverables." }
  ];

  return (
    <PageContainer>
      <ContentContainer>
        <Section>
          <Logo src={logo} alt="PSM Logo" />
          <FlexContainer>
            <LeftColumn>
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
            </RightColumn>
          </FlexContainer>
        </Section>

        <Section>
          <Subtitle>Our Process</Subtitle>
          <Text>Product Marketing & Sales Enablement projects</Text>
          {processes.map((process) => (
            <React.Fragment key={process.id}>
              <ProcessItem 
                isActive={activeProcess === process.id}
                onClick={() => setActiveProcess(activeProcess === process.id ? null : process.id)}
              >
                {process.id} {process.title}
              </ProcessItem>
              <ProcessContent isVisible={activeProcess === process.id}>
                {process.content}
              </ProcessContent>
            </React.Fragment>
          ))}
        </Section>

        <Section>
          <Subtitle>Branding & Website Projects</Subtitle>
          <Text>
            For branding and website projects, we follow a similar process but tailored to the specific needs of these projects.
          </Text>
          {/* You can add more details or another accordion here if needed */}
        </Section>

        <Section>
          <Subtitle>How we manage our relationship with you</Subtitle>
          <Text>
            To execute projects smoothly, we normally implement a series of tools and processes such as a shared project
            management board (Asana or the tool of your choice), Gantt charts, and project status reports as well as a shared
            Slack channel including both teams. Additionally, we establish weekly status meetings to oversee project progress,
            and for longer engagements, we add bi-weekly or monthly strategic syncs to make sure we are nailing strategy,
            positioning, and general direction.
          </Text>
          {/* You can add images of project management tools here if desired */}
        </Section>
      </ContentContainer>
    </PageContainer>
  );
}

export default ServicesSection;