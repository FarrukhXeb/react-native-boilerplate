import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenContainer from '../components/ScreenContainer';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function ForgotPasswordScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text>
          We will send the instructions how you can reset your password to your
          email.
        </Text>
        <AppInput
          label="Email"
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>): void =>
            setEmail(e.nativeEvent.text)
          }
        />
        <AppButton title="SEND EMAIL" disabled={!email} />
      </View>
    </ScreenContainer>
  );
}
