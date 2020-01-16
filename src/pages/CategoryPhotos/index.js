import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import usePhotosApi from 'api/photosAPI';
import PhotoList from 'components/PhotoList';
import { useStyles } from './styles';

const CategoryPhotos = ({ match, history }) => {
  const currentCategory = match.params.id;
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, isloading, isError] = usePhotosApi(
    currentCategory,
    currentPage,
  );
  const classes = useStyles();

  const reLoad = () => setCurrentPage(1);
  const loadMore = () => setCurrentPage(currentPage + 1);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Backdrop open={isloading} className={classes.backdrop}>
        {isloading && <CircularProgress size={68} color="inherit" />}
      </Backdrop>
      <Box mx="10px" py="20px">
        <Typography color="textPrimary" component="h1" className={classes.h1}>
          {currentCategory} Photos
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={reLoad}
          disabled={isloading || currentPage === 1}
        >
          ReLoad
        </Button>
        {isError && (
          <Alert severity="error">
            Something went wrong, please try again!
          </Alert>
        )}
        <PhotoList photos={photos} />
        {!isloading && photos.length > 0 && (
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={loadMore}
          >
            Load more
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default CategoryPhotos;
