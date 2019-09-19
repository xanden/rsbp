import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Toolbar, Typography, AppBar, Breadcrumbs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withRouter, Link } from "react-router-dom";
import routeList from "routes/routeList";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import langActions from "actions/lang";

const useStyles = makeStyles(theme => {
  return {
    appBar: {
      width: `calc(100% - ${theme.spacing(9)}px)`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      boxShadow: theme.shadows[1]
    },
    appBarShift: {
      marginLeft: `${theme.drawerWidth}px`,
      width: `calc(100% - ${theme.drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  };
});

const mapStateToProps = state => ({
  lang: state.lang
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      onChangeLocale: langActions.onChangeLocale
    },
    dispatch
  )
});

function Bar({ open, location: { pathname, state }, onChangeLocale, lang }) {
  const classes = useStyles();

  const pathnames = pathname
    .split("/")
    .filter(x => x)
    .map(path => {
      const findName = routeList.find(el => el.path === `/${path}`);
      return {
        name: findName ? findName.name : state ? state.name : path,
        path
      };
    });

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames
              .map(el => el.name)
              .slice(0, index + 1)
              .join("/")}`;
            return last ? (
              <Typography color="textPrimary" key={to}>
                {value.name}
              </Typography>
            ) : (
              <Link color="inherit" to={to} key={to}>
                {value.name}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Toolbar>
      <select
        name="lang"
        onChange={e => onChangeLocale(e.target.value)}
        style={{ position: "absolute", zIndex: "123123123123" }}
        defaultValue={lang}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </AppBar>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Bar));

Bar.propTypes = {
  open: PropTypes.bool.isRequired,
  onChangeLocale: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};
