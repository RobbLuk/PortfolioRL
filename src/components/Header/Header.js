import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem" /><span>Lukas, Robert Philipp </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#managed" passHref>
          <NavLink>Managed</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#interest" passHref>
          <NavLink>Interest</NavLink>
        </Link>
      </li>      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/RobbLuk">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/robert-philipp-lukas-954a01222">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/luk_robb/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
