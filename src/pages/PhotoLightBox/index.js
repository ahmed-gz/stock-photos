import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Lightbox from 'components/Lightbox';
import { IMG_FULL } from 'constants/paths';
import { useStyles } from './styles';

const PhotoLightBox = ({ match, history }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography color="textPrimary" component="h1" className={classes.h1}>
        LightBox of Photo id: {match.params.id}
      </Typography>
      <Lightbox
        src={`${IMG_FULL}/${match.params.id}.jpg`}
        onClose={history.goBack}
      />
    </Container>
  );
};

export default PhotoLightBox;
