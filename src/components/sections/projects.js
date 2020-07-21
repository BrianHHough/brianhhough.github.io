import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
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

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
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
const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Check Out My Full List of Projects</StyledTitle>
      <StyledArchiveLink to="/allprojects" ref={revealArchiveLink}>
        View the Full List Here
      </StyledArchiveLink>
      <div>
        <StyledGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { github, external, title, tech } = frontmatter;
                return (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                    exit={false}>
                    <StyledProject
                      key={i}
                      ref={el => (revealProjects.current[i] = el)}
                      tabIndex="0"
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}>
                      <StyledProjectInner>
                        <header>
                          <StyledProjectHeader>
                            <StyledFolder>
                              <FormattedIcon name="Folder" />
                            </StyledFolder>
                            <StyledProjectLinks>
                              {github && (
                                <StyledIconLink
                                  href={github}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="GitHub Link">
                                  <FormattedIcon name="GitHub" />
                                </StyledIconLink>
                              )}
                              {external && (
                                <StyledIconLink
                                  href={external}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="External Link">
                                  <FormattedIcon name="External" />
                                </StyledIconLink>
                              )}
                            </StyledProjectLinks>
                          </StyledProjectHeader>
                          <StyledProjectName>{title}</StyledProjectName>
                          <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </header>
                        <footer>
                          {tech && (
                            <StyledTechList>
                              {tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                              ))}
                            </StyledTechList>
                          )}
                        </footer>
                      </StyledProjectInner>
                    </StyledProject>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </StyledGrid>
      </div>
      <StyledMoreButton onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </StyledMoreButton>
      <br></br>
      <br></br>
      <StyledTitle ref={revealTitle}>My Skills</StyledTitle>

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
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
