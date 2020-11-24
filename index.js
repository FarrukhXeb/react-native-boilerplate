import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {name as appName} from './app.json';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
