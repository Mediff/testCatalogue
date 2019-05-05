import React, {Component} from 'react';
import styles from './Registration.module.sass';
import { register } from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';

class Registration extends Component {

    state = {
        emailErrorMessage: '',
        passwordErrorMessage: '',
        email: '',
        password: ''
    };

    render(){
        return (
            <div className={styles.mainContainer}>
                Hello from Register
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.userReducers.isFetching,
        authError: state.userReducers.authError,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    register: (user) => dispatch(register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);