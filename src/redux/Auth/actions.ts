import {User} from '../../types';
import {AuthActionTypes, AUTH_ACTION_TYPES, SignUpData} from './types';

export const logIn = (data: User): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.LOG_IN,
  payload: data,
});

export const loggingIn = (): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.LOGGING_IN,
});

export const signUp = (data: SignUpData): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.REGISTER,
  payload: data,
});

export const signingUp = (): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.REGISTERING,
});

export const logInError = (data: string): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.LOGGING_IN_ERROR,
  payload: data,
});

export const signupError = (data: string): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.REGISTERING_ERROR,
  payload: data,
});

export const signupSuccess = (data: string): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.REGISTERING_SUCCESS,
  payload: data,
});

export const checkIsAuthenticated = (): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.CHECKING_AUTH,
});

export const logOut = (): AuthActionTypes => ({
  type: AUTH_ACTION_TYPES.LOG_OUT,
});
