import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
const MainPage = lazy(() => import('pages/MainPage'));
const CategoryPhotos = lazy(() => import('pages/CategoryPhotos'));
const PhotoLightBox = lazy(() => import('pages/PhotoLightBox'));

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/category/:id" component={CategoryPhotos} />
        <Route exact path="/photo/:id" component={PhotoLightBox} />
      </Switch>
    </>
  );
};

export default Routes;
