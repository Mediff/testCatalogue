import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { getProductReviewsAction } from '../../actions/actionCreator';
import ProductCardExpanded from '../../components/ProductCardExpanded/ProductCardExpanded';
import RateProduct from '../../components/RateProduct/RateProduct';
import CommentsList from '../../components/CommentsList/CommentsList';
import styles from './Product.module.sass';

class Product extends Component {
    componentDidMount() {
        const { getProductReviews } = this.props;
        const { currentProduct } = this.props;
        if (currentProduct) {
            const { id } = currentProduct;
            getProductReviews(id);
        }
        else {
            const { history } = this.props;
            history.push('/');
        }
    }

    render() {
        const { currentProduct, currentUser, reviews } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        {currentProduct && <ProductCardExpanded product={currentProduct} />}
                    </div>
                    {currentUser && <div className={styles.rateContainer}><RateProduct /></div>}
                </div>
                <div className={styles.commentsContainer}>
                    <div className={styles.commentsListContainer}>
                        {reviews && <CommentsList reviews={reviews} currentUser={currentUser} />}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentProduct: state.productReducers.currentProduct,
    currentUser: state.userReducers.currentUser,
    reviews: state.reviewReducers.reviews,
});

const mapDispatchToProps = dispatch => ({
    getProductReviews: id => dispatch(getProductReviewsAction(id)),
});

Product.defaultProps = {
    currentProduct: null,
    currentUser: null,
    getProductReviews: noop,
    reviews: null,
};

Product.propTypes = {
    currentProduct: PropTypes.shape({
        text: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.number,
    }),
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
    getProductReviews: PropTypes.func,
    reviews: PropTypes.arrayOf(PropTypes.shape({
        created_at: PropTypes.string,
        rate: PropTypes.number,
        text: PropTypes.string,
        created_by: PropTypes.shape({
            username: PropTypes.string,
        }),
    })),
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
