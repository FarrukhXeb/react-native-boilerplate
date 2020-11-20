import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
// Screens
import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';
import {Alert, Button} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerRight: () => (
              <Button
                title="Info"
                color={'#fff'}
                onPress={() => console.log('This is a button')}
              />
            ),
          }}
        />
        <Stack.Screen name={'About'} component={About} />
        <Stack.Screen name={'Profile'} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
