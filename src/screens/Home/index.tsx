import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text, View, StyleSheet, Button} from 'react-native';
import {RootStackParamList} from '../../types';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to About'}
        onPress={() =>
          navigation.navigate('About', {data: 'Testing...', id: 1})
        }
      />
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
