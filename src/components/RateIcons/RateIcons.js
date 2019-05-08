import React from 'react';
import PropTypes from 'prop-types';
import styles from './RateIcons.module.sass';

const RateIcons = ({ blankIcon, fillIcon, overall, filled, clickHandler }) => {
    const renderIcons = () => {
        const icons = [];
        for (let i = 0; i < overall; i += 1) {
            const icon = filled > i ? fillIcon : blankIcon;
            icons.push(<img key={i} className={styles.icon} src={icon} onClick={() => clickHandler(i + 1)} alt='Rate icon' />);
        }
        return icons;
    };
    return (
        <div className={styles.mainContainer}>
            {renderIcons()}
        </div>
    );
};

RateIcons.propTypes = {
    blankIcon: PropTypes.string.isRequired,
    fillIcon: PropTypes.string.isRequired,
    overall: PropTypes.number.isRequired,
    filled: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default RateIcons;
