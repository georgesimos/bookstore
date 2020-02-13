import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ThemeContext } from 'theme';

export default function ThemeToggler({ className }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => (theme === 'reply' ? setTheme('rally') : setTheme('reply'));

  return (
    <IconButton className={className} onClick={toggleTheme}>
      {theme === 'reply' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
