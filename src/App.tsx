import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import * as React from 'react';
import {NonAuthNavigator, AuthNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  const isLoggedIn: boolean = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : <NonAuthNavigator />}
    </NavigationContainer>
  );
}
