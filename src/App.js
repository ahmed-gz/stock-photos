import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './App.css';

const App = () => {
  return (
    <Container maxWidth="md" className="app">
      <Box mx="10px" my="20px">
        <Typography color="textPrimary">Popular Categories</Typography>
      </Box>
    </Container>
  );
};

export default App;
