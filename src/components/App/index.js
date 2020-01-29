import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Routes from 'routes';

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes />
      </Suspense>
    </HashRouter>
  );
};

export default App;
