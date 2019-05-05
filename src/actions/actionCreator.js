import ACTION from './actionTypes';

export const login = user => ({
    type: ACTION.GET_USER,
    payload: user,
});

export const register = user => ({
    type: ACTION.CREATE_USER,
    payload: user,
});

export const getProductsAction = () => ({
    type: ACTION.GET_PRODUCTS,
});
