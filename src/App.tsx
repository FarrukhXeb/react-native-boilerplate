import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import * as React from 'react';
import {NonAuthNavigator, AuthNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {RootState} from './redux/store';

type Props = ReturnType<typeof mapStateToProps>;

function App(props: Props) {
  // const isLoggedIn: boolean = false;
  const {isLoggedIn} = props;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : <NonAuthNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
