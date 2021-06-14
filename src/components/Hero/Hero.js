import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There, I'm <br />
          Nirdesh Kumar Saini
        </SectionTitle>
        <SectionText>
        I'm an aspiring Full-Stack Developer (MERN), Hybrid Mobile Apps Developer (React Native), whose aim to take development skills to the next level and build awesome applications.
        </SectionText>
        <Button onClick={()=> window.location = "https://in.linkedin.com/in/nirdeshkumar02"}>Contact Me Here</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;