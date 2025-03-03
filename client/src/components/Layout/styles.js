import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    background: theme.palette.background.default,
    color: theme.palette.contrastText
  },
  content: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(15)
  }
}));
