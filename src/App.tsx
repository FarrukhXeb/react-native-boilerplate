import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import * as React from 'react';
import {NonAuthNavigator, AuthNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {RootState} from './redux/store';
import {bindActionCreators, Dispatch} from 'redux';
import {AuthActionTypes} from './redux/Auth/types';
import {checkIsAuthenticated} from './redux/Auth/actions';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function App(props: Props) {
  const {checkIsAuthenticated} = props;
  // const isLoggedIn: boolean = false;
  React.useEffect(() => {
    checkIsAuthenticated();
  });
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

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
  bindActionCreators({checkIsAuthenticated}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
