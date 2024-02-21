import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './InterestsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { interests } from '../../constants/constant';

const Interests = () => (
  <Section id="interest">
    <SectionTitle>Interest</SectionTitle>
    <GridContainer>
      {interests.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br />
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Interests;