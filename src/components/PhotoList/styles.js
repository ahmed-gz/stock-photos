import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tile: {
    padding: theme.spacing(1, 5) + ' !important',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1, 4) + ' !important',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 3) + ' !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2) + ' !important',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2px !important',
    },
  },
  titleBar: {
    borderRadius: '0 0 4px 4px',
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  skeleton: {
    borderRadius: '4px',
  },
  textSkeleton: {
    bottom: '65px',
    margin: '5px',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.white,
  },
}));
