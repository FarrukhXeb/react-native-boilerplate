import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, View, StyleSheet} from 'react-native';
import {RootParamList} from '../../types';

interface HomeProps {
  navigation: StackNavigationProp<RootParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
