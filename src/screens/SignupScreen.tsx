import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import AppLink from '../components/AppLink';
import ScreenContainer from '../components/ScreenContainer';
import {RootParamList} from '../types';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validators';
export type SignupProps = {
  navigation: StackNavigationProp<RootParamList, 'Signup'>;
  handleRegistration: (data: SignUpInputs) => void;
  loading: boolean;
  error: string;
  success: string;
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
  error: {
    backgroundColor: 'red',
    padding: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
  },
  success: {
    backgroundColor: 'green',
    padding: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
  },
});

type SignupErrors = {
  emailError: string;
  passwordError: string;
  usernameError: string;
};
const initialState: SignUpInputs = {
  email: '',
  password: '',
  username: '',
};
const Signup: React.FC<SignupProps> = ({
  handleRegistration,
  loading,
  error,
  success,
  navigation,
}) => {
  const [inputs, setInputs] = useState<SignUpInputs>(initialState);
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
    handleRegistration(inputs);
    setInputs(initialState);
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
          loading={loading}
          title="SIGNUP"
          onPress={onSubmit}
          disabled={!inputs.email || !inputs.password || !inputs.username}
        />
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}
        <AppLink
          title={'Go back to login'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScreenContainer>
  );
};
export default Signup;
