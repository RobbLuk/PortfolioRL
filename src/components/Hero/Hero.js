import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// Extend the Button component for a styled anchor tag
const LinkButton = styled(Button).attrs({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  text-decoration: none; // Optional: Removes underline from the link
  cursor: pointer; // Ensures the cursor changes to a pointer on hover
  display: inline-block; // Ensures the link behaves like a button
`;

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Lukas, Robert Philipp's Portfolio
        </SectionTitle>
        <SectionText>
          Dive into the world of a Data Science Enthusiast, with a rich background in mechanical engineering and a passion for analytics. Discover the synergy between technology, data, and innovation that drives my quest for knowledge and professional growth.
        </SectionText>
        <SectionText>
          From unraveling the complexities of financial advisory analytics to exploring the potential of machine learning and AI, my journey is about bridging the gap between data and actionable insights. Let's explore the realms of data science, AI, and beyond.
        </SectionText>
        <Button href='https://www.linkedin.com/in/robert-philipp-lukas-954a01222'>
          Explore My Journey
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
