import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
import { Icon } from '@iconify/react';
import webpackIcon from '@iconify/icons-cib/webpack';
import smartphoneSetup from '@iconify/icons-zmdi/smartphone-setup';
import websiteIcon from '@iconify/icons-whh/website';
import researchHintonPlot from '@iconify/icons-carbon/research-hinton-plot';
import chartLineData from '@iconify/icons-carbon/chart-line-data';
import cloudDataOps from '@iconify/icons-carbon/cloud-data-ops';
import designLine from '@iconify/icons-clarity/design-line';
import mobilePhone from '@iconify/icons-emojione-monotone/mobile-phone';
import laptopMac from '@iconify/icons-zmdi/laptop-mac';

const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
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
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  // StyledEmailLink href={`mailto:${email}`}>Connect With Me</StyledEmailLink
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href="/#about">About Me</StyledEmailLink>
      <StyledEmailLink href="/#work">Work</StyledEmailLink>
      <StyledEmailLink href="/#projects">Featured Projects</StyledEmailLink>
      <StyledEmailLink href="/#contact">Connect With Me</StyledEmailLink>
      <StyledEmailLink
        href="https://brianhhough.com/contact"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Main Website
      </StyledEmailLink>
    </div>
  );

  const six = () => (
    <StyledTechList className="skills">
      <li align="center">
        {' '}
        <Icon icon={mobilePhone} />
        Apps Dev
      </li>
      <li align="center">
        {' '}
        <Icon icon={researchHintonPlot} />
        Back-End
      </li>
      <li align="center">
        {' '}
        <Icon icon={webpackIcon} />
        Blockchain
      </li>
      <li align="center">
        {' '}
        <Icon icon={designLine} />
        Designing
      </li>
      <li align="center">
        {' '}
        <Icon icon={laptopMac} />
        Front - End
      </li>
      <li align="center">
        {' '}
        <Icon icon={chartLineData} /> Research
      </li>
      <li align="center">
        {' '}
        <Icon icon={cloudDataOps} /> Software
      </li>
      <li align="center">
        {' '}
        <Icon icon={smartphoneSetup} />
        UI / UX
      </li>
      <li align="center">
        {' '}
        <Icon icon={websiteIcon} />
        Websites
      </li>
    </StyledTechList>
  );
  const items = [one, two, three, four, five, six];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
