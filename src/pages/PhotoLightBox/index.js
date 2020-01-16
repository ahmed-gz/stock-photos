import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';

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
      <Link underline="none" component="button" onClick={history.goBack}>
        <CloseIcon />
      </Link>
      <Photo src={`${IMG_FULL}/${match.params.id}.jpg`} />
    </Container>
  );
};

export default PhotoLightBox;
