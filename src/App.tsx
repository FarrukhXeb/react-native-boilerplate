import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import * as React from 'react';
import {NonAuthNavigator, AuthNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {RootState} from './redux/store';
import {bindActionCreators, Dispatch} from 'redux';
import {AuthActionTypes} from './redux/Auth/types';
import {checkAuth} from './redux/Auth/thunks';
import FullScreenLoader from './components/FullScreenLoader';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function App(props: Props) {
  const {isAuthenticating, checkIsAuthenticated} = props;
  React.useEffect(() => {
    checkIsAuthenticated();
  }, [checkIsAuthenticated]);
  const {isLoggedIn} = props;

  if (isAuthenticating) {
    return <FullScreenLoader />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : <NonAuthNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isAuthenticated,
  isAuthenticating: state.auth.checkingAuth,
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
  bindActionCreators({checkIsAuthenticated: checkAuth}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
