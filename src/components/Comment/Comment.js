import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.sass';
import star from '../../images/star-blank.png';

const Comment = ({ review }) => {
    const generateStars = () => {
        const { rate } = review;
        const array = [];
        for (let i = 0; i < rate; i += 1) {
            array.push(<img src={star} key={i} alt='Star' />);
        }
        return array;
    };
    const {
        created_at: createdAt, rate, text, created_by: createdBy,
    } = review;
    const { username } = createdBy;
    const titleStyle = rate > 2 ? styles.titleContainerSuccess : styles.titleContainerFailure;
    return (
        <div className={styles.mainContainer}>
            <div className={titleStyle}>
                <div>
                    {username}
                </div>
                <div>
                    {generateStars(rate)}
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.date}>
                    {createdAt}
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
};

Comment.propTypes = {
    review: PropTypes.shape({
        created_at: PropTypes.string,
        rate: PropTypes.number,
        text: PropTypes.string,
        created_by: PropTypes.shape({
            username: PropTypes.string,
        }),
    }).isRequired,
};

export default Comment;
