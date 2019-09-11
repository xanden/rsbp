import React from "react";
import FilterLink from "../containers/FilterLink";
import { FormattedMessage } from "react-intl";

const Footer = () => (
  <>
    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
    <FormattedMessage id="welcome" />
    <FormattedMessage id="selectordinal" values={{ order: 1 }} />
    <br />
    <FormattedMessage id="selectordinal" values={{ order: 2 }} />
    <br />
    <FormattedMessage id="selectordinal" values={{ order: 3 }} />
    <br />
    <FormattedMessage id="selectordinal" values={{ order: 4 }} />
    <br />
    <FormattedMessage id="selectordinal" values={{ order: 14 }} />
  </>
);

export default Footer;
