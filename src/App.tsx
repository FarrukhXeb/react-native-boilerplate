import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import * as React from 'react';
import {NonAuthNavigator, AuthNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
export default function App() {
  const isLoggedIn: boolean = false;
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? <AuthNavigator /> : <NonAuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
