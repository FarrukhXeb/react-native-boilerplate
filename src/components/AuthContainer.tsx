import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {logOut} from '../redux/Auth/actions';
import {AuthActionTypes} from '../redux/Auth/types';
import {storage} from '../utils/storage';

type AuthContainerProps = ReturnType<typeof mapDispatchToProps>;

const AuthContainer: React.FC<AuthContainerProps> = ({
  children,
  performLogOut,
}) => {
  const handleLogOut = () => {
    performLogOut();
    storage.remove('token');
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.logout} onPress={handleLogOut}>
          Logout
        </Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flexBasis: '8%',
    backgroundColor: '#ff5816',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  content: {
    flexGrow: 1,
  },
  logout: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) =>
  bindActionCreators({performLogOut: logOut}, dispatch);

export default connect(null, mapDispatchToProps)(AuthContainer);
