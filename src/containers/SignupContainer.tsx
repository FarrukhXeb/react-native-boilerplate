import React, {Component} from 'react';
import SignupScreen, {SignupProps} from '../screens/SignupScreen';

export default class SignupContainer extends Component<SignupProps> {
  render() {
    const {navigation} = this.props;
    return <SignupScreen navigation={navigation} />;
  }
}
