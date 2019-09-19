// Core
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, withRouter } from "react-router-dom";

// Components
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import routeList from "routes/routeList";

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      backgroundColor: theme.palette.black.default,
      width: theme.drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      backgroundColor: theme.palette.black.default,
      width: theme.drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      backgroundColor: theme.palette.black.default,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(9),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    listItemOpen: {
      transition: theme.transitions.create("padding", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    listItemClosed: {
      paddingLeft: theme.spacing(3),
      transition: theme.transitions.create("padding", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },

    listHovered: {
      "& svg": {
        color: "#c0c0c0"
      },
      color: "#c0c0c0 !important",

      "&:hover svg": {
        color: theme.palette.primary.main
      }
    }
  };
});

function DrawerBox({ open, handleDrawer, location: { pathname } }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
      onMouseEnter={() => handleDrawer(!open)}
      onMouseLeave={() => handleDrawer(!open)}
    >
      <div className={classes.toolbar}>icon</div>
      <Divider />
      <List>
        {routeList.map(route => {
          if (route.icon) {
            return (
              <ListItem
                button
                key={route.path}
                className={clsx(classes.drawer, {
                  [classes.listItemOpen]: open,
                  [classes.listItemClosed]: !open,
                  [classes.listHovered]: true
                })}
                component={Link}
                to={route.path}
                selected={pathname === route.path}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    </Drawer>
  );
}

export default withRouter(DrawerBox);

DrawerBox.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};
