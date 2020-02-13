import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Typography, Hidden } from '@material-ui/core';
import { BurgeButton, MobileNavBar } from 'components';
import pages from './pages';
import useStyles from './styles';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

export default function NavBar() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('scroll', handleScroll);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={classes.header}>
      <nav className={clsx({ [classes.navbar]: true, [classes.navbarColor]: scrollPosition > 90 })}>
        <Link className={classes.logoLink} to="/">
          <Typography className={classes.logo} variant="h2">
            Book Store
          </Typography>
        </Link>
        <Hidden smDown>
          <div className={classes.navLinks}>
            {pages.map(({ title, href }) => (
              <Link key={title} className={classes.navLink} to={href}>
                {title}
              </Link>
            ))}
          </div>
        </Hidden>
        <ThemeToggler className={classes.themeToggler} />
        <div className={classes.navMobile}>
          <BurgeButton onClick={() => setShowMenu(!showMenu)} />
        </div>
      </nav>
      <MobileNavBar pages={pages} showMenu={showMenu} onToogleMenu={() => setShowMenu(!showMenu)} />
    </header>
  );
}
