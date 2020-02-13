import React, { useState } from 'react';
import { Router } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './redux';

import ThemeProvider from './theme'; // This could be on REDUX
import history from './history';
import Routes from './routes';
import { ThemeContext } from 'theme';

function App() {
  const [theme, setTheme] = useState('reply');

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
