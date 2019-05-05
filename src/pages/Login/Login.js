import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from './Login.module.sass';
import { login } from '../../actions/actionCreator';

class Login extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                Hello from Login
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.userReducers.isFetching,
    authError: state.userReducers.authError,
    currentUser: state.userReducers.currentUser,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
