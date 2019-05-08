import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Link } from 'react-router-dom';
import styles from './Login.module.sass';
import { loginAction } from '../../actions/actionCreator';
import AuthFormInput from '../../components/AuthFormInput/AuthFormInput';
import AuthSubmitButton from '../../components/AuthSubmitButton/AuthSubmitButton';
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';
import { loginScheme } from '../../utils/validation/validationSchemes';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            passwordError: '',
            usernameError: '',
        };
    }

    proceedError = (error) => {
        this.setState({
            [`${error.path}Error`]: error.message,
        });
    };

    changeHandler = value => event => this.setState({
        [value]: event.target.value,
    });

    submitHandler = async (event) => {
        event.preventDefault();
        this.setState({
            passwordError: '',
            usernameError: '',
        });
        try {
            const { username, password } = this.state;
            const { login, history } = this.props;
            await loginScheme.validate({ username, password }, { abortEarly: false });
            login({ user: { username, password }, history });
        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    render() {
        const { usernameError, passwordError } = this.state;
        const { authError } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.authContainer}>
                    <div className={styles.authTitle}>
                        Sign In
                    </div>
                    <div className={styles.serverErrorMessage}>
                        <ValidationMessage message={authError} />
                    </div>
                    <form className={styles.authForm} onSubmit={this.submitHandler}>
                        <div className={styles.authInput}>
                            <AuthFormInput text='Username' changeHandler={this.changeHandler('username')} />
                            <ValidationMessage message={usernameError} />
                        </div>
                        <div className={styles.authInput}>
                            <AuthFormInput text='Password' type='password' changeHandler={this.changeHandler('password')} />
                            <ValidationMessage message={passwordError} />
                        </div>
                        <div className={styles.submitButton}>
                            <AuthSubmitButton text='Sign In' />
                        </div>
                        <div className={styles.redirectLink}>
                            <p>Don`t have account?</p>
                            <Link to='/register'>Sign Up</Link>
                        </div>
                    </form>
                </div>
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
    login: user => dispatch(loginAction(user)),
});

Login.defaultProps = {
    currentUser: null,
    authError: null,
    login: noop,
    history: null,
};

Login.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
    authError: PropTypes.string,
    login: PropTypes.func,
    history: PropTypes.instanceOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
