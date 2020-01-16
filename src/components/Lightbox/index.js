import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';

import Photo from 'components/Photo';
import { useStyles } from './styles';

const Lightbox = ({ src, onClose }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link underline="none" component="button" onClick={onClose}>
        <CloseIcon className={classes.closeIcon} />
      </Link>
      <Photo src={src} />
    </Box>
  );
};

Lightbox.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func,
};

export default Lightbox;
