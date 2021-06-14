import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+917500450428">+91-7500450428</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:saini.nirdesh.kumar@gmail.com">
            saini.nirdesh.kumar@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovative minds make wonders and increase productivity.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/nirdeshkumar02">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://in.linkedin.com/in/nirdeshkumar02">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/nirdeshkumar02/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/nirdeshkumar02">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/nirdeshkumar02">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
