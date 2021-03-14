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
};
