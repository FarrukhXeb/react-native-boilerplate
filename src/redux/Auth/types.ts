import {IResponse, User} from '../../types';

export enum AUTH_ACTION_TYPES {
  CHECKING_AUTH = 'AUTH_ACTION/CHECKING_AUTH',
  LOGGING_IN = 'AUTH_ACTION/LOGGING_IN',
  LOG_IN = 'AUTH_ACTION/LOG_IN',
  LOGGING_IN_ERROR = 'AUTH_ACTION/LOGGING_IN_ERROR',
  REGISTERING = 'AUTH_ACTION/REGISTERING',
  REGISTER = 'AUTH_ACTION/REGISTER',
  REGISTERING_ERROR = 'AUTH_ACTION/REGISTERING_ERROR',
  REGISTERING_SUCCESS = 'AUTH_ACTION/REGISTERING_SUCCESS',
  LOG_OUT = 'AUTH_ACTION/LOG_OUT',
}

export type AuthState = {
  isAuthenticated: boolean;
  checkingAuth: boolean;
  loggingIn: boolean;
  registering: boolean;
  registerSuccess: string;
  loginError: string;
  registeringError: string;
  user: User | null;
};

export interface LogInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  username: string;
}

interface LogInAction {
  type: typeof AUTH_ACTION_TYPES.LOG_IN;
  payload: User;
}

interface LoggingInAction {
  type: typeof AUTH_ACTION_TYPES.LOGGING_IN;
}

interface SigningUp {
  type: typeof AUTH_ACTION_TYPES.REGISTERING;
}

interface SignUpAction {
  type: typeof AUTH_ACTION_TYPES.REGISTER;
  payload: SignUpData;
}

interface LogInErrorAction {
  type: typeof AUTH_ACTION_TYPES.LOGGING_IN_ERROR;
  payload: string;
}

interface SignUpErrorAction {
  type: typeof AUTH_ACTION_TYPES.REGISTERING_ERROR;
  payload: string;
}

interface SignUpSuccess {
  type: typeof AUTH_ACTION_TYPES.REGISTERING_SUCCESS;
  payload: string;
}

interface CheckingAuth {
  type: typeof AUTH_ACTION_TYPES.CHECKING_AUTH;
}

interface LogOutAction {
  type: typeof AUTH_ACTION_TYPES.LOG_OUT;
}

export interface AuthResponse extends IResponse {
  data: {
    user: User;
    token: {
      token: string;
      expiresIn: string;
    };
    success: boolean;
    message: string;
  };
}

export interface GetUserResponse extends IResponse {
  data: {
    user: User;
    success: boolean;
    message: string;
  };
}
export interface JWTDecoded {
  _id: string;
  iat: Number;
  exp: Number;
}
export type AuthActionTypes =
  | LogInAction
  | LoggingInAction
  | SignUpAction
  | SigningUp
  | LogInErrorAction
  | SignUpErrorAction
  | SignUpSuccess
  | CheckingAuth
  | LogOutAction;
