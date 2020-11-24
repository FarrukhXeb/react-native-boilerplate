import React from 'react';
import AppButton from './AppButton';
import {ButtonProps} from 'react-native-elements';
import {colors} from '../utils/theme';

const AppLink: React.FC<ButtonProps> = (props) => (
  <AppButton
    buttonStyle={{backgroundColor: colors.white}}
    titleStyle={{color: colors.green}}
    {...props}
  />
);

export default AppLink;
