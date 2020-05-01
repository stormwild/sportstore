import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SportsStoreDataStore from './data/Store';
import ShopConnector from './components/ShopConnector';

const App = () => {
  return (
    <Provider store={SportsStoreDataStore}>
      <Router>
        <Switch>
          <Route path='/shop' component={ShopConnector} />
          <Redirect to='/shop' />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
