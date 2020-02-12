import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'components';
import Home from 'pages/Home';
import WithLayoutRoute from './WithLayoutRoute';
import Books from 'pages/Books';
import AddBook from 'pages/AddBook';

function Routes() {
  return (
    <Switch>
      <WithLayoutRoute component={Home} exact layout={Layout} path="/" />
      <WithLayoutRoute component={Books} exact layout={Layout} path="/books" />
      <WithLayoutRoute component={AddBook} exact layout={Layout} path="/addbook" />
    </Switch>
  );
}

export default Routes;
