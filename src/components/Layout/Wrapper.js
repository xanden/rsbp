import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Container from "./Container";
import Bar from "./Bar";
import Drawer from "./Drawer";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

export default function Wrapper({ children }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawer() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <Bar open={open} />
      <Drawer open={open} handleDrawer={handleDrawer} />
      <Container>{children}</Container>
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired
};
