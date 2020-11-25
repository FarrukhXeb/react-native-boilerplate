import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {performRegistration} from '../redux/Auth/thunks';
import {AuthActionTypes} from '../redux/Auth/types';
import {RootState} from '../redux/store';
import SignupScreen, {SignUpInputs} from '../screens/SignupScreen';
import {RootParamList} from '../types';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    navigation: StackNavigationProp<RootParamList, 'Signup'>;
  };

class SignupContainer extends Component<Props> {
  handleRegistration = (data: SignUpInputs): void => {
    this.props.performRegistration(data);
  };
  render() {
    const {
      navigation,
      registering,
      registeringError,
      registerSuccess,
    } = this.props;
    return (
      <SignupScreen
        loading={registering}
        handleRegistration={this.handleRegistration}
        navigation={navigation}
        error={registeringError}
        success={registerSuccess}
      />
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isAuthenticated,
  registering: state.auth.registering,
  registeringError: state.auth.registeringError,
  registerSuccess: state.auth.registerSuccess,
});
const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
  bindActionCreators({performRegistration}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
