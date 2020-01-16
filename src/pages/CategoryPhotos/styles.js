import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  h1: {
    padding: '20px 0',
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
