import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;
import { Icon } from '@iconify/react';
import mongodbIcon from '@iconify/icons-cib/mongodb';
import reactIcon from '@iconify/icons-cib/react';
import angularIcon from '@iconify/icons-cib/angular';
import bxlJavascript from '@iconify/icons-bx/bxl-javascript';
import html5Shield from '@iconify/icons-cib/html5';
import css3Shiled from '@iconify/icons-cib/css3-shiled';
import railsIcon from '@iconify/icons-cib/rails';
import nodeJs from '@iconify/icons-cib/node-js';
import javaIcon from '@iconify/icons-cib/java';
import typescriptIcon from '@iconify/icons-cib/typescript';
import cIcon from '@iconify/icons-cib/c';
import coreuiC from '@iconify/icons-cib/coreui-c';
import pythonIcon from '@iconify/icons-cib/python';
import ethereumIcon from '@iconify/icons-cib/ethereum';
import phpIcon from '@iconify/icons-cib/php';
import rubyIcon from '@iconify/icons-cib/ruby';

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
      <h2>Front-End</h2>
      <StyledTechList className="skills">
        <li align="center">
          {' '}
          <Icon icon={bxlJavascript} color="#ffff" /> JavaScript
        </li>

        <li align="center">
          {' '}
          <Icon icon={reactIcon} color="#ffff" /> React.js
        </li>

        <li align="center">
          {' '}
          <Icon icon={angularIcon} color="#ffff" /> Angular
        </li>

        <li align="center">
          <Icon icon={css3Shiled} color="#ffff" />
          CSS/SCSS
        </li>

        <li align="center">
          <Icon icon={html5Shield} color="#ffff" />
          HTML 5+
        </li>
      </StyledTechList>
      <br></br>
      <h2>Back-End</h2>
      <StyledTechList className="skills">
        <li align="center">
          <Icon icon={typescriptIcon} color="#fffff" />
          TypeScript
        </li>
        <li align="center">
          {' '}
          <Icon icon={pythonIcon} color="#fffff" /> Python
        </li>
        <li align="center">
          {' '}
          <Icon icon={ethereumIcon} color="#fffff" />
          Solidity
        </li>
        <li align="center">
          <Icon icon={mongodbIcon} color="#fffff" /> MongoDB{' '}
        </li>
        <li align="center">
          <Icon icon={rubyIcon} color="#fffff" />
          Ruby
        </li>
        <li align="center">
          <Icon icon={nodeJs} color="#fffff" />
          Node
        </li>
        <li align="center">
          <Icon icon={javaIcon} color="#fffff" />
          Java
        </li>
        <li align="center">
          <Icon icon={cIcon} color="#fffff" />
          C++
        </li>
        <li align="center">
          {' '}
          <Icon icon={coreuiC} color="#fffff" /> C#
        </li>
        <li align="center">
          <Icon icon={phpIcon} color="#fffff" />
          PHP
        </li>
        <li align="center">
          {' '}
          <Icon icon={railsIcon} color="#fffff" />
          Rails
        </li>
      </StyledTechList>
      <br></br>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
