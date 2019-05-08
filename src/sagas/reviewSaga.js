import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { createReview, getReviews } from '../api/controllers/reviewController';

export function* createReviewSaga({ payload }) {
    yield put({ type: ACTION.CREATE_PRODUCT_REVIEW_REQUEST });
    try {
        const { review } = payload;
        const { id } = review;
        yield createReview(review, id);
        yield put({ type: ACTION.GET_PRODUCT_REVIEWS, payload: id });
    } catch (e) {
        yield put({ type: ACTION.CREATE_PRODUCT_REVIEW_ERROR, error: e.response.data });
    }
}

export function* getReviewsSaga({ payload }) {
    yield put({ type: ACTION.GET_PRODUCT_REVIEWS_REQUEST });
    try {
        let { data } = yield getReviews(payload);
        data = data.sort((a, b) => a.created_at.localeCompare(b.created_at)).reverse();
        yield put({ type: ACTION.GET_PRODUCT_REVIEWS_RESPONSE, payload: data });
    } catch (e) {
        yield put({ type: ACTION.GET_PRODUCT_REVIEWS_ERROR, error: e.response.data });
    }
}
