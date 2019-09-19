import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  return {
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },

    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    appBarSpacer: theme.mixins.toolbar
  };
});

export default function ContainerBox({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container className={classes.container}>{children}</Container>
    </main>
  );
}

ContainerBox.propTypes = {
  children: PropTypes.element.isRequired
};
