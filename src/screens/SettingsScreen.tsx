import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {RootParamList} from '../types';

type SettingsProps = {
  navigation: StackNavigationProp<RootParamList, 'Settings'>;
  route: RouteProp<RootParamList, 'Settings'>;
};

const Settings: React.FC<SettingsProps> = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
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

export default Settings;
