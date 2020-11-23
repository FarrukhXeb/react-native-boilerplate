import React, {Component} from 'react';
import LoginScreen, {LoginProps} from '../screens/LoginScreen';

export default class LoginContainer extends Component<LoginProps> {
  render() {
    const {navigation} = this.props;
    return <LoginScreen navigation={navigation} />;
  }
}
