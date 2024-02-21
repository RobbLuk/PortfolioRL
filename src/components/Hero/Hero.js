import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = ({ handleClick }) => (
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
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/robert-philipp-lukas-954a01222'}>Explore My Journey</Button>
      </LeftSection>
    </Section>
  </>
);


export default Hero;