import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';

import Photo from 'components/Photo';
import { THUMB_SIZE, IMG_THUMB } from 'constants/paths';
import { useStyles } from './styles';

const PhotoList = ({ photos }) => {
  const classes = useStyles();

  return (
    <>
      <GridList cellHeight={THUMB_SIZE} cols={4}>
        {photos.map(photo => (
          <GridListTile key={photo.img_id} cols={1} className={classes.tile}>
            <Link underline="none" href={`#/photo/${photo.img_id}`}>
              <Photo
                src={`${IMG_THUMB}/${photo.img_id}.jpg`}
                title={photo.tags}
                height={THUMB_SIZE.toString()}
              />
              <GridListTileBar
                title={photo.tags}
                titlePosition="bottom"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array,
};

export default PhotoList;
