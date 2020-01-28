import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Lightbox from 'components/Lightbox';
import { IMG_FULL } from 'constants/paths';
import { useStyles } from './styles';

const PhotoLightBox = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Lightbox src={`${IMG_FULL}/${id}.jpg`} onClose={goBack} />
    </Container>
  );
};

export default PhotoLightBox;
