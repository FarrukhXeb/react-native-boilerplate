import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootParamList} from '../../types';

type LoginProps = {
  navigation: StackNavigationProp<RootParamList, 'Login'>;
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
