import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const Photo = ({ src, title }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={src}
          title={title}
        />
      </CardActionArea>
    </Card>
  );
};

Photo.defaultProps = {
  src: 'https://via.placeholder.com/600/1ee8a4',
  title: 'nihil at amet non hic quia qui',
};

Photo.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Photo;
