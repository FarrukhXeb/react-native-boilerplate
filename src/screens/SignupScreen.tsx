import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import ScreenContainer from '../components/ScreenContainer';
import {RootParamList} from '../types';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validators';
export type SignupProps = {
  navigation: StackNavigationProp<RootParamList>;
};

export interface SignUpInputs {
  email: string;
  password: string;
  username: string;
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  additionalActions: {
    marginTop: 20,
  },
});

type SignupErrors = {
  emailError: string;
  passwordError: string;
  usernameError: string;
};

const Signup: React.FC<SignupProps> = () => {
  const [inputs, setInputs] = useState<SignUpInputs>({
    email: '',
    password: '',
    username: '',
  });
  const [errors, setErrors] = useState<SignupErrors>({
    emailError: '',
    passwordError: '',
    usernameError: '',
  });

  const onChangeInput = (text: string, name: string) =>
    setInputs({...inputs, [name]: text});

  const onSubmit = (): void => {
    const emailError: string = validateEmail(inputs.email);
    const passwordError: string = validatePassword(inputs.password);
    const usernameError: string = validateUsername(inputs.username);
    if (emailError || passwordError || usernameError) {
      setErrors({emailError, passwordError, usernameError});
      return;
    } else {
      setErrors({emailError: '', passwordError: '', usernameError: ''});
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <AppInput
          placeholder="Email"
          errorMessage={errors.emailError}
          onChangeText={(value: string) => onChangeInput(value, 'email')}
        />
        <AppInput
          placeholder="Username"
          errorMessage={errors.usernameError}
          onChangeText={(value: string) => onChangeInput(value, 'username')}
        />
        <AppInput
          placeholder="Password"
          errorMessage={errors.passwordError}
          onChangeText={(value: string) => onChangeInput(value, 'password')}
          secureTextEntry
        />
        <AppButton
          title="SIGNUP"
          onPress={onSubmit}
          disabled={!inputs.email || !inputs.password || !inputs.username}
        />
      </View>
    </ScreenContainer>
  );
};
export default Signup;
