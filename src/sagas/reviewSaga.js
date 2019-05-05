import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { createReview, getReviews } from '../api/controllers/reviewController';

export function* createReviewSaga({ payload }) {
    yield put({ type: ACTION.CREATE_PRODUCT_REVIEW_REQUEST });
    try {
        const { review, reviews } = payload;
        yield createReview(review);
        reviews.shift(review);
        yield put({ type: ACTION.CREATE_PRODUCT_REVIEW_RESPONSE, payload: reviews });
    } catch (e) {
        yield put({ type: ACTION.CREATE_PRODUCT_REVIEW_ERROR, error: e.response.data });
    }
}

export function* getReviewsSaga({ payload }) {
    yield put({ type: ACTION.GET_PRODUCT_REVIEWS_REQUEST });
    try {
        const { productId } = payload;
        const { data } = yield getReviews(productId);
        yield put({ type: ACTION.GET_PRODUCT_REVIEWS_RESPONSE, payload: data });
    } catch (e) {
        yield put({ type: ACTION.GET_PRODUCT_REVIEWS_ERROR, error: e.response.data });
    }
}
