import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import configureStore, { history } from "./configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";
// preloadedState => init your data before render
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });
}
