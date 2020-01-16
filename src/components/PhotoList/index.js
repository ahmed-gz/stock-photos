import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';

import Photo from 'components/Photo';
import { THUMB_SIZE, IMG_THUMB } from 'constants/paths';
import { useStyles } from './styles';

const PhotoList = ({ photos, perPage, isReloading, isLoading }) => {
  const classes = useStyles();
  const data = isLoading
    ? isReloading
      ? [...Array.from(new Array(perPage))]
      : [...photos, ...Array.from(new Array(perPage))]
    : photos;

  return (
    <>
      <GridList cellHeight={THUMB_SIZE} cols={4}>
        {data.map((photo, key) => (
          <GridListTile key={key} cols={1} className={classes.tile}>
            {photo ? (
              <Link underline="none" href={`#/photo/${photo.img_id}`}>
                <Photo
                  src={`${IMG_THUMB}/${photo.img_id}.jpg`}
                  isLoading={isLoading}
                  title={photo.tags}
                  height={THUMB_SIZE.toString()}
                />
                <GridListTileBar
                  title={photo.tags}
                  titlePosition="bottom"
                  className={classes.titleBar}
                />
              </Link>
            ) : (
              <>
                <Skeleton
                  variant="rect"
                  animation="wave"
                  height={Number(THUMB_SIZE)}
                />
                <Skeleton animation="wave" />
              </>
            )}
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array,
  perPage: PropTypes.number,
  isReloading: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default PhotoList;
