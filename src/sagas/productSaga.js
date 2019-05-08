import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getProducts } from '../api/controllers/productController';

export function* getProductsSaga() {
    yield put({ type: ACTION.GET_PRODUCTS_REQUEST });
    try {
        const { data } = yield getProducts();
        yield put({ type: ACTION.GET_PRODUCTS_RESPONSE, payload: data });
    } catch (e) {
        yield put({ type: ACTION.GET_USER_ERROR, error: e.response.data });
    }
}

export function* setProductSaga({ payload }) {
    const { product, history } = payload;
    history.push(`/products/product/${product.id}`);
    yield put({ type: ACTION.SET_PRODUCT_RESPONSE, payload: product });
}
