interface ScreenOptions {
  title: string;
}
export type RootStackParamList = {
  Home: undefined;
  About: {data: string; id: number};
  Profile: undefined;
};

export interface Screen {
  name: string;
  options?: ScreenOptions;
}
