/* eslint-disable prefer-destructuring */

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
space.xs = space[1];
space.sm = space[2];
space.md = space[3];
space.lg = space[4];
space['1x'] = space[5];
space['2x'] = space[6];
space['3x'] = space[7];
space['4x'] = space[8];

const borders = [0, '1px solid', '2px solid', '3px solid'];
borders['@1'] = borders[1];
borders['@2'] = borders[2];
borders['@3'] = borders[3];

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  '1x': '22px',
  '2x': '26px',
  '3x': '32px',
  '4x': '46px',
  '5x': '58px',
};

const colors = {
  white: '#FFFFFF',
  primary: '#EB9050',
  secondary: '#FCEAC6',
  success: '#97A73F',
  error: '#E83D32',
  border: '#dadada',
  link: '#6097E6',
  grey: '#f0f0f0',
  semitransparent: 'rgba(0, 0, 0, 0.5)',
  greys: {
    '@100': '#F3F4F8',
    '@200': '#D2D4DA',
    '@300': '#B3B5BD',
    '@400': '#9496A1',
    '@500': '#777986',
    '@600': '#5B5D6B',
    '@700': '#404252',
    '@800': '#282A3A',
    '@900': '#101223',
  },
};

export default {
  colors,
  space,
  borders,
  fontSizes,
  radii: {
    none: '0',
    default: '8px',
  },
  zIndices: {
    popup: '9999',
  },
  lineHeights: {
    tight: 1,
    normal: 1.4,
    loose: 1.75,
  },
};
