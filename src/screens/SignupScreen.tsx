import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootParamList} from '../types';
export type SignupProps = {
  navigation: StackNavigationProp<RootParamList>;
};

export interface SignUpInputs {
  email: string;
  password: string;
  username: string;
}

const Signup: React.FC<SignupProps> = ({navigation}) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button
        title={'Go to Login'}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
export default Signup;
