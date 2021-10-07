import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from './Fallback';

const Home = React.lazy(() => import('./pages/Home'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
