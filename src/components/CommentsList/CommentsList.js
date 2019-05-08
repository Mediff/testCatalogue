import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentsList.module.sass';
import Comment from '../Comment/Comment';

const CommentsList = ({ reviews, currentUser }) => {
    const renderComments = () => (reviews.map((review) => {
        const isUserComment = currentUser ? review.username === currentUser.username : false;
        return (
            <div key={review.id} className={styles.review}>
                <Comment review={review} isAuthor={isUserComment} />
            </div>
        );
    }));

    return (
        <div className={styles.mainContainer}>
            {renderComments()}
        </div>
    );
};

CommentsList.defaultProps = {
    reviews: null,
    currentUser: null,
};

CommentsList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        created_at: PropTypes.string,
        rate: PropTypes.number,
        text: PropTypes.string,
        created_by: PropTypes.shape({
            username: PropTypes.string,
        }),
    })),
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
};

export default CommentsList;
