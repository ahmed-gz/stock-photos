import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Photo from 'components/Photo';
import { IMG_FULL } from 'constants/paths';
import { useStyles } from './styles';

const PhotoLightBox = ({ match, history }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography color="textPrimary" component="h1" className={classes.h1}>
        LightBox of Photo id: {match.params.id}
      </Typography>
      <Photo src={`${IMG_FULL}/${match.params.id}.jpg`} />
    </Container>
  );
};

export default PhotoLightBox;
