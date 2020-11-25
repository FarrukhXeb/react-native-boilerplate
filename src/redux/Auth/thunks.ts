import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {RootState} from '../store';
import {
  checkIsAuthenticated,
  loggingIn,
  logIn,
  logInError,
  logOut,
  signingUp,
  signupError,
  signupSuccess,
} from './actions';
import {LoginInputs} from '../../screens/LoginScreen';
import service from '../../utils/service';
import {AuthActionTypes, AuthResponse} from './types';
import {SignUpInputs} from '../../screens/SignupScreen';
import {storage} from '../../utils/storage';

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
    dispatch(logInError(error?.response?.data?.message || error.message));
    setTimeout(() => dispatch(logInError('')), 5000);
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
    } else {
      dispatch(signupSuccess(res.data.message));
    }
    setTimeout(() => dispatch(signupError('')), 5000);
  } catch (error) {
    dispatch(signupError(error?.response?.data?.message || error.message));
    setTimeout(() => dispatch(signupError('')), 5000);
  }
};

export const checkAuth = (): ThunkAction<
  void,
  RootState,
  {},
  Action<AuthActionTypes>
> => async (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => {
  dispatch(checkIsAuthenticated());
  const token: string | null = await storage.get('token');
  if (token) {
    console.log(token);
  } else {
    dispatch(logOut());
  }
};
