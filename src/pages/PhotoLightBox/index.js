import React from 'react';
import Container from '@material-ui/core/Container';

import Lightbox from 'components/Lightbox';
import { IMG_FULL } from 'constants/paths';
import { useStyles } from './styles';

const PhotoLightBox = ({ match, history }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Lightbox
        src={`${IMG_FULL}/${match.params.id}.jpg`}
        onClose={history.goBack}
      />
    </Container>
  );
};

export default PhotoLightBox;
