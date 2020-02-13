import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Footer } from 'components';
import useStyles from './styles';
import { Container } from '@material-ui/core';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Container component="main" className={classes.content}>
        {children}
      </Container>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
