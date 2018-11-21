import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import GridTied from './components/Prueba';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route. <Route path="/some/otherpage" component={SomeOtherPage} />
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/gridtied" component={GridTied} />
  </Route>
);
