import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, View, StyleSheet} from 'react-native';
import {RootParamList} from '../types';
import AuthContainer from '../components/AuthContainer';

interface HomeProps {
  navigation: StackNavigationProp<RootParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <AuthContainer>
      <View style={styles.root}>
        <Text>Home Screen</Text>
      </View>
    </AuthContainer>
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
