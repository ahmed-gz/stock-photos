import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    margin: '70px 30px 20px 30px',
  },
  closeButton: {
    position: 'fixed',
    right: '30px',
    top: '8px',
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[500],
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
    },
  },
}));
