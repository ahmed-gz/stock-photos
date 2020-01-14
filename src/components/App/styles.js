import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#e5e5e5',
  },
  h1: {
    padding: '20px 0',
    fontSize: '2rem',
  },
  titleBar: {
    borderRadius: '4px 4px 0 0',
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
