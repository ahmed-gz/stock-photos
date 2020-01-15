import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';

import usePhotosApi from 'api/photosAPI';
import PhotoList from 'components/PhotoList';
import { useStyles } from './styles';

const CategoryPhotos = ({ match, history }) => {
  const currentCategory = match.params.id;
  const [photos, isloading, isError] = usePhotosApi(currentCategory);
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Backdrop open={isloading} className={classes.backdrop}>
        {isloading && <CircularProgress size={68} color="inherit" />}
      </Backdrop>
      <Box mx="10px" py="20px">
        <Typography color="textPrimary" component="h1" className={classes.h1}>
          {currentCategory} Photos
        </Typography>
        {isError && (
          <Alert severity="error">
            Something went wrong, please try again!
          </Alert>
        )}
        <PhotoList photos={photos} />
      </Box>
    </Container>
  );
};

export default CategoryPhotos;
