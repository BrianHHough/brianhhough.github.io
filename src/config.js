module.exports = {
  siteTitle: 'Brian H. Hough | Apps, Websites, UI/UX',
  siteDescription:
    'Brian H. Hough is a UI/UX designer, software engineer, and app/website developer from Boston who is passionate about innovative technologies and how to build them. I love everything prototying and wireframing to full stack applications and websites.',
  siteKeywords:
    'Brian H. Hough, Brian Hough, Brian, Hough, BrianHHough, @BrianHHough, software engineer, software engineering, front-end engineer, front end engineer, front-end developer front end developer, web developer, coding, programming, code, javascript, solidity, MongoDB, HTML, CSS, SCSS, 100 Days of Code, digital transformation, innovation, technology',
  siteUrl: 'https://brianhhough.tech',
  siteLanguage: 'en_US',
  name: 'Brian H. Hough',
  location: 'Boston, MA | New York City, New York',
  email: 'contact@brianhhough.com',
  github: 'https://github.com/brianhhough',
  twitterHandle: '@BrianHHough',
  socialMedia: [
    {
      name: '',
      url: 'https://brianhhough.com',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/brianhhough',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/brianhhough',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/brianhhough',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/brianhhough',
    },
  ],

  navLinks: [
    {
      name: 'About Me',
      url: '/#me',
    },
    {
      name: 'Recent Work',
      url: '/#work',
    },
    {
      name: 'Projects x Skills',
      url: '/#projects',
    },
    {
      name: 'Connect',
      url: '/#connect',
    },
    {
      name: 'Coursework',
      url: '/coding',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
