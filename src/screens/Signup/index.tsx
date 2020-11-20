import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootParamList} from '../../types';
type SignupProps = {
  navigation: StackNavigationProp<RootParamList>;
};
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
