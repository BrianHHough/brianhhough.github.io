import { css } from 'styled-components';

import MontserratLightTTF from '@fonts/Montserrat/MontserratLight.ttf';
import MontserratLightItalicTTF from '@fonts/Montserrat/MontserratLightItalic.ttf';
import MontserratRegularTTF from '@fonts/Montserrat/MontserratRegular.ttf';
import MontserratThinItalicTTF from '@fonts/Montserrat/MontserratThinItalic.ttf';
import MontserratMediumTTF from '@fonts/Montserrat/MontserratMedium.ttf';
import MontserratMediumItalicTTF from '@fonts/Montserrat/MontserratMediumItalic.ttf';
import MontserratSemiBoldTTF from '@fonts/Montserrat/MontserratSemiBold.ttf';
import MontserratSemiBoldItalicTTF from '@fonts/Montserrat/MontserratSemiBoldItalic.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThinItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThinItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
