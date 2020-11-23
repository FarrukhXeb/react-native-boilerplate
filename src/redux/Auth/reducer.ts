import {AuthActionTypes, AuthState, AUTH_ACTION_TYPES} from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  checkingAuth: true,
  loggingIn: false,
  registering: false,
  loginError: '',
  registeringError: '',
  user: null,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loggingIn: false,
        checkingAuth: false,
      };
    case AUTH_ACTION_TYPES.LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
      };
    case AUTH_ACTION_TYPES.LOGGING_IN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        loggingIn: false,
      };
    case AUTH_ACTION_TYPES.REGISTERING:
      return {
        ...state,
        registering: true,
      };
    case AUTH_ACTION_TYPES.REGISTER:
      return {
        ...state,
        registering: false,
      };
    case AUTH_ACTION_TYPES.REGISTERING_ERROR:
      return {
        ...state,
        registeringError: action.payload,
      };
    case AUTH_ACTION_TYPES.CHECKING_AUTH:
      return {
        ...state,
        checkingAuth: true,
      };
    case AUTH_ACTION_TYPES.LOG_OUT:
    default:
      return state;
  }
}