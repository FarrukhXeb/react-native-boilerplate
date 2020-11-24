import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export default ScreenContainer;
