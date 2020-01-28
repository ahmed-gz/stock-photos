import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import PhotoList from 'components/PhotoList';
import Breadcrumbs from 'components/Breadcrumbs';
import { Context } from 'context';
import usePhotosApi from 'api/photosAPI';
import { useInfiniteScroll } from 'util/hooks';
import { useStyles } from './styles';

const CategoryPhotos = () => {
  const classes = useStyles();
  const context = useContext(Context);
  const { id } = useParams();
  const [bottomIsReached] = useInfiniteScroll(200);
  const {
    state: { currentCategory, currentPage },
    actions: { setCurrentCategory, reLoadPage, loadMore },
  } = context;
  const [photos, isLoading, isError, nextPage] = usePhotosApi(id, currentPage);

  useEffect(() => {
    if (bottomIsReached && nextPage && photos.length && !isLoading) {
      loadMore();
    }
  }, [bottomIsReached, nextPage, photos, isLoading]);

  useEffect(() => {
    reLoadPage();
    setCurrentCategory(id);
  }, [id]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box mx="10px" py="20px">
        <Breadcrumbs category={currentCategory} />
        <Typography color="textPrimary" component="h1" className={classes.h1}>
          {currentCategory} Photos
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={reLoadPage}
          disabled={isLoading || currentPage === 1}
        >
          ReLoad
        </Button>
        {isError && (
          <Alert severity="error">
            Something went wrong, please try again!
          </Alert>
        )}
        <PhotoList
          photos={photos}
          perPage={40}
          isReloading={currentPage === 1}
          isLoading={isLoading}
        />
      </Box>
    </Container>
  );
};

export default CategoryPhotos;
