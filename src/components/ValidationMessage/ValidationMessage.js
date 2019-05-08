import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidationMessage.module.sass';

const ValidationMessage = ({ message }) => (
    message && <div className={styles.message}>{ message }</div>
);

ValidationMessage.propTypes = {
    message: PropTypes.string,
};

export default ValidationMessage;
