import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {performLogIn} from '../redux/Auth/thunks';
import {AuthActionTypes} from '../redux/Auth/types';
import {RootState} from '../redux/store';
import LoginScreen, {LoginInputs} from '../screens/LoginScreen';
import {RootParamList} from '../types';

interface LoginContainerProps {
  navigation: StackNavigationProp<RootParamList, 'Login'>;
}

type LoginContainerProp = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  LoginContainerProps;

class LoginContainer extends Component<LoginContainerProp> {
  handleLogin = (data: LoginInputs) => {
    this.props.performLogIn(data);
  };

  render() {
    const {navigation, loginError, loading} = this.props;
    return (
      <LoginScreen
        loginError={loginError}
        loggingIn={loading}
        handleLogin={this.handleLogin}
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isAuthenticated,
  loading: state.auth.loggingIn,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
  bindActionCreators({performLogIn}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
