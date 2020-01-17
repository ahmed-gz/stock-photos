import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';

import Photo from 'components/Photo';
import { THUMB_SIZE, IMG_THUMB } from 'constants/paths';
import { useStyles } from './styles';

const CategoryList = ({ categories }) => {
  const classes = useStyles();

  return (
    <>
      <GridList cellHeight={THUMB_SIZE + 15} cols={4}>
        {categories.map(category => (
          <GridListTile key={category.img_id} cols={1} className={classes.tile}>
            <Link underline="none" href={`#/category/${category.label}`}>
              <Photo
                src={`${IMG_THUMB}/${category.img_id}.jpg`}
                title={category.label}
                height={THUMB_SIZE.toString()}
              />
              <GridListTileBar
                title={category.label}
                titlePosition="top"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
