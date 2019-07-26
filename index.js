import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";

import configureStore from "./src/redux/store";

const store = configureStore();

const REDUX = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => REDUX);
