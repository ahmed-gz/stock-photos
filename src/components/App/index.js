import React, { useEffect, useContext, Suspense } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Routes from 'routes';
import { Context } from 'context';

const App = () => {
  const context = useContext(Context);
  const {
    actions: { addCancelToken },
  } = context;

  useEffect(() => {
    console.log('interceptors called');
    axios.interceptors.request.use(
      function(config) {
        //  Generate cancel token source
        let source = axios.CancelToken.source();

        // Set cancel token on this request
        config.cancelToken = source.token;

        // Add to context to make cancellation available from anywhere
        addCancelToken(source);
        console.log('addCancelToken called');

        return config;
      },
      function(error) {
        return Promise.reject(error);
      },
    );
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes />
      </Suspense>
    </HashRouter>
  );
};

export default App;
