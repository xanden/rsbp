import React from "react";
import { withRouter } from "react-router-dom";

function User({
  match: {
    params: { id }
  }
}) {
  return (
    <>
      <div>User: {id}</div>
    </>
  );
}

export default withRouter(User);
