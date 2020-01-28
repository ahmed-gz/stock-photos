import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Breadcrumbs = ({ category }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#/">
        Categories
      </Link>
      {category && <Typography color="textPrimary">{category}</Typography>}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
