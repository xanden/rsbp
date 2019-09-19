import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import langActions from "actions/lang";
import { IntlProvider } from "react-intl";
import { ConnectedRouter } from "connected-react-router";
import routes from "routes";
import translations from "translations";

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

class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
  };

  render() {
    const { history, lang } = this.props;

    return (
      <IntlProvider locale={lang} messages={translations[lang]}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
