import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import styles from './AuthFormInput.module.sass';

const AuthFormInput = ({ text, type, changeHandler }) => (
    <input className={styles.input}
        type={type}
        placeholder={text}
        onChange={event => changeHandler(event)}
    />
);

AuthFormInput.defaultProps = {
    text: '',
    type: 'text',
    changeHandler: noop,
};

AuthFormInput.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func,
};

export default AuthFormInput;
