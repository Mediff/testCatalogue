import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Link } from 'react-router-dom';
import styles from './Registration.module.sass';
import { registerAction } from '../../actions/actionCreator';
import AuthFormInput from '../../components/AuthFormInput/AuthFormInput';
import AuthSubmitButton from '../../components/AuthSubmitButton/AuthSubmitButton';
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';
import { regScheme } from '../../utils/validation/validationSchemes';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            passConfirm: '',
            passwordError: '',
            usernameError: '',
            passConfirmError: '',
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
            passConfirmError: '',
        });
        try {
            const { username, password, passConfirm } = this.state;
            const { register, history } = this.props;
            await regScheme.validate({ username, password, passConfirm }, { abortEarly: false });
            register({ user: { username, password }, history });
        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    render() {
        const { usernameError, passwordError, passConfirmError } = this.state;
        const { authError } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.authContainer}>
                    <div className={styles.authTitle}>
                        Sign Up
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
                        <div className={styles.authInput}>
                            <AuthFormInput text='Confirm Password' type='password' changeHandler={this.changeHandler('passConfirm')} />
                            <ValidationMessage message={passConfirmError} />
                        </div>
                        <div className={styles.submitButton}>
                            <AuthSubmitButton text='Sign Up' />
                        </div>
                        <div className={styles.redirectLink}>
                            <p>Already have account?</p>
                            <Link to='/login'>Sign In</Link>
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
    register: user => dispatch(registerAction(user)),
});

Registration.defaultProps = {
    currentUser: null,
    authError: null,
    register: noop,
    history: null,
};

Registration.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
    authError: PropTypes.string,
    register: PropTypes.func,
    history: PropTypes.instanceOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
