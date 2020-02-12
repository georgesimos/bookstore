import { red, blue, lightBlue, yellow, green } from '@material-ui/core/colors';

const white = '#fff';
const black = '#000';

const themePalette = {
  rally: {
    type: 'dark',
    background: { paper: 'rgb(37, 40, 47)', default: 'rgb(50, 51, 61)' },
    custom: { secondary: 'rgb(52, 66, 60)', primary: 'rgb(26, 93, 87)', contrastText: white },
    contrastText: white
  },
  reply: {
    type: 'light',
    background: { paper: 'rgb(254, 254, 254)', default: 'rgb(237, 240, 242)' },
    custom: { secondary: 'rgb(238, 241, 243)', primary: 'rgb(52, 73, 85)', contrastText: white },
    contrastText: black
  }
};

// theme on of basil, crane, pinky, rally, reply
const makePalette = type => {
  const { contrastText, ...rest } = themePalette[type];
  return {
    ...rest,
    contrastText,
    contrastThreshold: 2,
    border: '#DFE3E8',
    divider: '#DFE3E8',
    common: {
      black,
      white,
      contrastText,
      commonBackground: 'rgb(45, 45, 45)',
      neutral: '#E4E7EB',
      muted: '#9EA0A4'
    },
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText
    },
    warning: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
      contrastText
    },
    danger: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText
    }
  };
};

export default makePalette;
