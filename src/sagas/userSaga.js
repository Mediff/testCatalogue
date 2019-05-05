import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { login, register } from '../api/controllers/userController';
import { setToken, clearToken } from '../utils/localStorage/localStorage';

export function* loginSaga({ payload }) {
    yield put({ type: ACTION.GET_USER_REQUEST });
    try {
        const { user, history } = payload;
        const { username } = user;
        const { data } = yield login(user);
        const { token } = data;
        setToken(token);
        yield put({ type: ACTION.GET_USER_RESPONSE, payload: username });
        history.push('/');
    } catch (e) {
        yield put({ type: ACTION.GET_USER_ERROR, error: e.response.data });
    }
}

export function* registerSaga({ payload }) {
    yield put({ type: ACTION.CREATE_USER_REQUEST });
    try {
        const { user, history } = payload;
        const { username } = user;
        const { data } = yield register(user);
        const { token } = data;
        setToken(token);
        yield put({ type: ACTION.CREATE_USER_RESPONSE, payload: username });
        history.push('/');
    } catch (e) {
        yield put({ type: ACTION.CREATE_USER_ERROR, error: e.response.data });
    }
}

export function* logoutSaga() {
    clearToken();
    yield put({ type: ACTION.CLEAR_USER });
}
