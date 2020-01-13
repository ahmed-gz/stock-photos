import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Photo from 'components/Photo';
import { PHOTOS_THUMBS } from 'constants/paths';
import './styles.css';

const App = () => {
  return (
    <Container maxWidth="md" className="app">
      <Box mx="10px" my="20px">
        <Typography color="textPrimary">Popular Categories</Typography>
        <Photo
          src={`${PHOTOS_THUMBS}/280h/AMXMQQWNQJ.jpg`}
          title="Beach sunset"
        />
        <Photo />
        <Photo />
      </Box>
    </Container>
  );
};

export default App;
