import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Breadcrumbs = ({ category }) => {
  return (
    <Breadcrbs aria-label="breadcrumb">
      <Link color="inherit" href="#/">
        Categories
      </Link>
      {category && <Typography color="textPrimary">{category}</Typography>}
    </Breadcrbs>
  );
};

export default Breadcrumbs;
