import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies & Tools</SectionTitle>
    <SectionText>
      I've honed my skills across a broad spectrum of technologies in the data science and analytics domain, blending engineering principles with statistical analysis and machine learning.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Data Science & Machine Learning</ListTitle>
          <ListParagraph>
            Proficient in Python with libraries like Pandas, NumPy, Scikit-Learn, TensorFlow, and PyTorch for data analysis, statistical modeling, and machine learning.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Statistical Analysis</ListTitle>
          <ListParagraph>
            Experienced with R for statistical computing and graphics, leveraging packages like ggplot2 for data visualization and dplyr for data manipulation.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>
            Experience with SQL databases, data warehousing, and data integration tools for managing and processing large datasets.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Development & Visualization Tools</ListTitle>
          <ListParagraph>
            Skilled in using IDEs like Jupyter Notebook and VS Code, and visualization tools such as Power BI and Tableau for insightful data presentations.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
