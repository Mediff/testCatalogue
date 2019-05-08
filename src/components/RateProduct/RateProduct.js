import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { setStarAction, postProductReviewAction } from '../../actions/actionCreator';
import RateIcons from '../RateIcons/RateIcons';
import star from '../../images/star.png';
import starGold from '../../images/star-gold.png';
import { reviewScheme } from '../../utils/validation/validationSchemes';
import styles from './RateProduct.module.sass';

class RateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: '',
            reviewError: '',
            starCountError: '',
        };
    }

    changeHandler = event => this.setState({
        review: event.target.value,
    });

    clickHandler = (number) => {
        const { setStar } = this.props;
        setStar(number);
    };

    proceedError = (error) => {
        this.setState({
            [`${error.path}Error`]: error.message,
        });
    };

    submitHandler = async (event) => {
        event.preventDefault();
        this.setState({
            reviewError: '',
            starCountError: '',
        });
        try {
            const { review } = this.state;
            const {
                starCount, postProductReview, reviews, currentProduct,
            } = this.props;
            const { id } = currentProduct;
            await reviewScheme.validate({ review, starCount }, { abortEarly: false });
            postProductReview({ review: { rate: starCount, text: review, id }, reviews });
        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    renderRateContent = () => {
        const { starCount } = this.props;
        const { reviewError, starCountError } = this.state;
        return (
            <div className={styles.bodyContainer}>
                <div className={styles.rateContainer}>
                    <RateIcons filled={starCount}
                        overall={5}
                        fillIcon={starGold}
                        blankIcon={star}
                        clickHandler={this.clickHandler}
                    />
                </div>
                <div className={styles.feedbackContainer}>
                    <textarea className={styles.textInput} onChange={this.changeHandler} />
                    <div className={styles.error}>
                        {starCountError}
                    </div>
                    <div className={styles.error}>
                        {reviewError}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button type='button' className={styles.button} onClick={this.submitHandler}> Leave Review</button>
                </div>
            </div>
        );
    };

    render() {
        const { reviews, currentUser } = this.props;
        let isReviewed;
        if (reviews) {
            isReviewed = reviews.filter(review => review.created_by.username === currentUser.username).length > 0;
        }
        return (
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    Rate Product
                </div>
                { reviews && !isReviewed ? this.renderRateContent()
                    : <div className={styles.message}>You already rate this product!</div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentProduct: state.productReducers.currentProduct,
    currentUser: state.userReducers.currentUser,
    starCount: state.reviewReducers.starCount,
    reviews: state.reviewReducers.reviews,
});

const mapDispatchToProps = dispatch => ({
    setStar: starNumber => dispatch(setStarAction(starNumber)),
    postProductReview: review => dispatch(postProductReviewAction(review)),
});

RateProduct.defaultProps = {
    currentProduct: null,
    currentUser: null,
    setStar: noop,
    postProductReview: noop,
    starCount: 0,
    reviews: null,
};

RateProduct.propTypes = {
    currentProduct: PropTypes.shape({
        text: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.number,
    }),
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
    setStar: PropTypes.func,
    postProductReview: PropTypes.func,
    starCount: PropTypes.number,
    reviews: PropTypes.arrayOf(PropTypes.shape({
        created_at: PropTypes.string,
        rate: PropTypes.number,
        text: PropTypes.string,
        created_by: PropTypes.shape({
            username: PropTypes.string,
        }),
    })),
};

export default connect(mapStateToProps, mapDispatchToProps)(RateProduct);
