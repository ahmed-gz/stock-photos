import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';

import CategoryList from 'components/CategoryList';
import useCategoriesApi from 'api/categoriesAPI';
import { useStyles } from './styles';

const MainPage = () => {
  const [categories, isLoading, isError] = useCategoriesApi();
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Backdrop open={isLoading} className={classes.backdrop}>
        {isLoading && <CircularProgress size={68} color="inherit" />}
      </Backdrop>
      <Box mx="10px" py="20px">
        <Typography color="textPrimary" component="h1" className={classes.h1}>
          Popular Categories
        </Typography>
        {isError && (
          <Alert severity="error">
            Something went wrong, please try again!
          </Alert>
        )}
        <CategoryList categories={categories} />
      </Box>
    </Container>
  );
};

export default MainPage;
