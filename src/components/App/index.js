import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';

import Photo from 'components/Photo';
import useCategoriesApi from 'api/categoriesAPI';
import { THUMB_SIZE, IMG_THUMB } from 'constants/paths';
import { useStyles } from './styles.js';

const App = () => {
  const { categories, isloading, isError } = useCategoriesApi();
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box mx="10px" py="20px">
        {isError && (
          <Typography color="textPrimary">
            Something went wrong, please try again.
          </Typography>
        )}
        {isloading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography
              color="textPrimary"
              component="h1"
              className={classes.h1}
            >
              Popular Categories
            </Typography>
            <GridList cellHeight={THUMB_SIZE} cols={4}>
              {categories.map(category => (
                <GridListTile key={category.img_id} cols={1}>
                  <Link
                    underline="none"
                    href={`${IMG_THUMB}/${category.img_id}.jpg`}
                    target="_blank"
                  >
                    <Photo
                      src={`${IMG_THUMB}/${category.img_id}.jpg`}
                      title={category.label}
                      height={THUMB_SIZE}
                    />
                    <GridListTileBar
                      title={category.label}
                      className={classes.titleBar}
                      titlePosition="top"
                    />
                  </Link>
                </GridListTile>
              ))}
            </GridList>
          </>
        )}
      </Box>
    </Container>
  );
};

export default App;
