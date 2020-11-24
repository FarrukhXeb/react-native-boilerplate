import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import AppLink from '../components/AppLink';
import ScreenContainer from '../components/ScreenContainer';
import {RootParamList} from '../types';
import {validateEmail, validatePassword} from '../utils/validators';

export type LoginProps = {
  navigation: StackNavigationProp<RootParamList, 'Login'>;
  handleLogin: (data: LoginInputs) => void;
  loginError: string;
  loggingIn: boolean;
};
export type LoginInputs = {
  email: string;
  password: string;
};

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
});

type LoginErrors = {
  emailError: string;
  passwordError: string;
};

const Login: React.FC<LoginProps> = ({
  navigation,
  handleLogin,
  loginError,
  loggingIn,
}) => {
  const [inputs, setInputs] = useState<LoginInputs>({email: '', password: ''});
  const [error, setError] = useState<LoginErrors>({
    emailError: '',
    passwordError: '',
  });

  const onChangeInput = (text: string, name: string) =>
    setInputs({...inputs, [name]: text});

  const onSubmit = (): void => {
    const emailError: string = validateEmail(inputs.email);
    const passwordError: string = validatePassword(inputs.password);

    if (emailError || passwordError) {
      setError({emailError, passwordError});
      return;
    } else {
      setError({emailError: '', passwordError: ''});
    }

    handleLogin(inputs);
  };
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <AppInput
          placeholder="Email"
          errorMessage={error.emailError}
          onChangeText={(value: string) => onChangeInput(value, 'email')}
        />
        <AppInput
          placeholder="Password"
          errorMessage={error.passwordError}
          secureTextEntry
          onChangeText={(value: string) => onChangeInput(value, 'password')}
        />
        <AppButton title="LOGIN" onPress={onSubmit} loading={loggingIn} />
        {loginError.length > 0 && (
          <Text style={styles.error}>{loginError}</Text>
        )}
        <View style={styles.additionalActions}>
          <AppLink
            title="Not a member? Sign In"
            onPress={() => navigation.navigate('Signup')}
          />
          <AppLink
            title="Forgot Password"
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
export default Login;
