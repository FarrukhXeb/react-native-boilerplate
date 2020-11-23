import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {loggingIn, logIn, logInError, signingUp, signupError} from './actions';
import {LoginInputs} from '../../screens/LoginScreen';
import service from '../../utils/service';
import {AuthActionTypes, AuthResponse} from './types';
import {SignUpInputs} from '../../screens/SignupScreen';

export const performLogIn = (
  data: LoginInputs,
): ThunkAction<void, RootState, {}, Action<AuthActionTypes>> => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch(loggingIn());
  try {
    const res: AuthResponse = await service.post('/auth/login', data);
    if (res.data.success) {
      dispatch(logIn(res.data.user));
    } else {
      dispatch(logInError(res.data.message));
    }
  } catch (error) {
    dispatch(logInError(error.message));
  }
};

export const performRegistration = (
  data: SignUpInputs,
): ThunkAction<void, RootState, {}, Action<AuthActionTypes>> => async (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) => {
  dispatch(signingUp());
  try {
    const res: AuthResponse = await service.post('/auth/register', data);
    if (!res.data.success) {
      dispatch(signupError(res.data.message));
    }
  } catch (error) {
    dispatch(signupError(error.message));
  }
};
