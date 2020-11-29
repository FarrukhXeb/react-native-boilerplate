import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthContainer from '../components/AuthContainer';

const Profile = () => {
  return (
    <AuthContainer>
      <View style={styles.root}>
        <Text>Profile Screen</Text>
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
export default Profile;
