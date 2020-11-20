import React, {useLayoutEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

type AboutProps = {
  navigation: StackNavigationProp<RootStackParamList, 'About'>;
  route: RouteProp<RootStackParamList, 'About'>;
};

const About: React.FC<AboutProps> = ({route, navigation}) => {
  const {data, id} = route.params;
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title={'Update Count'} onPress={() => setCount((c) => c + 1)} />
      ),
    });
  });

  return (
    <View>
      <Text>About Screen {data}</Text>
      <Text>{id}</Text>
      <Text>{count}</Text>
    </View>
  );
};
export default About;
