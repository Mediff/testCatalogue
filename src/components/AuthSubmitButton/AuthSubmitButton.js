import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthSubmitButton.module.sass';

const AuthSubmitButton = ({ text }) => (
    <button className={styles.submitButton} type='submit'>
        { text }
    </button>
);

AuthSubmitButton.defaultProps = {
    text: '',
};

AuthSubmitButton.propTypes = {
    text: PropTypes.string,
};

export default AuthSubmitButton;
