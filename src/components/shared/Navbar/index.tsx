import React from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export const Navbar: React.FC = () => {
  const uiClasses = useStyles();
  const menuButtons = [
    {
      icon: 'menu',
      tooltip: '',
      action: '',
    },
    {
      icon: '',
      tooltip: '',
      action: '',
    },
  ];

  const actionButtons = (button: any, index: number) => {
    return (
      <IconButton
        key={index}
        edge="start"
        color="inherit"
        aria-label={button.icon}
      ></IconButton>
    );
  };

  return (
    <AppBar position="static">
      {/* teste */}
      <Toolbar variant="dense">
        {menuButtons.map(actionButtons)}
        <Typography
          variant="h6"
          color="inherit"
          className={uiClasses.menuTitle}
        >
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
