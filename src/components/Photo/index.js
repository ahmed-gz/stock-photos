import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';

const Photo = ({ src, title, height }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height={height}
          image={src}
          title={title}
          className={classes.img}
        />
      </CardActionArea>
    </Card>
  );
};

Photo.defaultProps = {
  src: 'https://via.placeholder.com/600/1ee8a4',
  title: 'nihil at amet non hic quia qui',
  height: 'auto',
};

Photo.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
};

export default Photo;
