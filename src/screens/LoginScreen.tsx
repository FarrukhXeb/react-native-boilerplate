import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootParamList} from '../types';

export type LoginProps = {
  navigation: StackNavigationProp<RootParamList, 'Login'>;
};
export type LoginInputs = {
  email: string;
  password: string;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title={'Go to Sign Up'}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};
export default Login;
