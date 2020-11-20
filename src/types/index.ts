interface ScreenOptions {
  title: string;
}
export type RootParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
  Login: undefined;
  Signup: undefined;
};

export interface Screen {
  name: string;
  options?: ScreenOptions;
}
