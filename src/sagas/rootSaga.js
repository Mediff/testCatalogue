import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getProductsSaga } from './productSaga';
import { getReviewsSaga, createReviewSaga } from './reviewSaga';
import { loginSaga, registerSaga, logoutSaga } from './userSaga';

function* rootSaga() {
    yield takeLatest(ACTION.GET_USER, loginSaga);
    yield takeLatest(ACTION.CREATE_USER, registerSaga);
    yield takeLatest(ACTION.CLEAR_USER, logoutSaga);
    yield takeLatest(ACTION.GET_PRODUCTS, getProductsSaga);
    yield takeLatest(ACTION.GET_PRODUCT_REVIEWS, getReviewsSaga);
    yield takeLatest(ACTION.CREATE_PRODUCT_REVIEW, createReviewSaga);
}

export default rootSaga;
