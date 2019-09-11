import React, { Component } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import ru from "./translations/ru.json";
import en from "./translations/en.json";

class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    selectedLocale: "ru"
  };

  render() {
    const { history } = this.props;
    const { selectedLocale } = this.state;
    return (
      <IntlProvider
        locale={selectedLocale}
        messages={selectedLocale === "ru" ? ru : en}
      >
        <select
          name="lang"
          onChange={e => this.setState({ selectedLocale: e.target.value })}
        >
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default App;
