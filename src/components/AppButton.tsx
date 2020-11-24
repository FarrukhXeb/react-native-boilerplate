import React from 'react';
import {View} from 'react-native';
import {Button, ButtonProps} from 'react-native-elements';
import {colors} from '../utils/theme';

const AppButton: React.FC<ButtonProps> = (props) => (
  <View>
    <Button buttonStyle={{backgroundColor: colors.green}} {...props} />
  </View>
);

export default AppButton;
