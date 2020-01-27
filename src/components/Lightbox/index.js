import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Photo from 'components/Photo';
import { useStyles } from './styles';

const Lightbox = ({ src, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={onClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Photo src={src} />
      </DialogContent>
    </Dialog>
  );
};

Lightbox.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func,
};

export default Lightbox;
