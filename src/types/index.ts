import {AxiosResponse} from 'axios';

interface ScreenOptions {
  title: string;
}
export type RootParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export interface Screen {
  name: string;
  options?: ScreenOptions;
}

export type User = {
  _id: string;
  username: string;
  email: string;
  password?: string;
};

export interface IResponse extends AxiosResponse {
  data: {
    success: boolean;
    messsage?: string;
  };
}
