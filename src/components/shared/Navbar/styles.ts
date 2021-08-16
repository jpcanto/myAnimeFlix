import { createStyles, makeStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuTitle: {
      backgroundColor: theme.palette.primary.main,
      marginRight: theme.spacing(2),
    },
  }),
);
