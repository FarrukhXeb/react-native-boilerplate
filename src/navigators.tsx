import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParamList} from './types';
import Home from './screens/HomeScreen';
import Settings from './screens/SettingsScreen';
import Profile from './screens/ProfileScreen';
import Login from './containers/LoginContainer';
import Signup from './containers/SignupContainer';
import ForgotPassword from './screens/ForgotPasswordScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator<RootParamList>();
const Tab = createBottomTabNavigator<RootParamList>();

export const NonAuthNavigator = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name={'Login'} component={Login} />
    <Stack.Screen name={'Signup'} component={Signup} />
    <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
  </Stack.Navigator>
);

export const AuthNavigator = () => (
  <Tab.Navigator
    initialRouteName={'Home'}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}>
    <Tab.Screen
      name={'Home'}
      component={Home}
      options={() => ({
        tabBarIcon: ({color, size}): React.ReactNode => {
          return <Icon name={'home-outline'} size={size} color={color} />;
        },
      })}
    />
    <Tab.Screen
      name={'Settings'}
      component={Settings}
      options={() => ({
        tabBarIcon: ({color, size}): React.ReactNode => {
          return <Icon name={'settings-outline'} size={size} color={color} />;
        },
      })}
    />
    <Tab.Screen
      name={'Profile'}
      component={Profile}
      options={() => ({
        tabBarIcon: ({color, size}): React.ReactNode => {
          return (
            <Icon name={'person-circle-outline'} size={size} color={color} />
          );
        },
      })}
    />
  </Tab.Navigator>
);
