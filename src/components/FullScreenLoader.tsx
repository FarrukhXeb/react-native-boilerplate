import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function FullScreenLoader(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text>Loading..</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
