import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Routes from 'routes';
import { Provider } from 'context';

const App = () => {
  return (
    <Provider>
      <HashRouter>
        <Suspense fallback={<CircularProgress />}>
          <Routes />
        </Suspense>
      </HashRouter>
    </Provider>
  );
};

export default App;
