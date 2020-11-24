import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, InputProps} from 'react-native-elements';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
});

const AppInput: React.FC<InputProps> = (props) => (
  <View style={styles.inputContainer}>
    <Input {...props} />
  </View>
);

export default AppInput;
