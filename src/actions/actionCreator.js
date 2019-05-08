import ACTION from './actionTypes';

export const loginAction = user => ({
    type: ACTION.GET_USER,
    payload: user,
});

export const registerAction = user => ({
    type: ACTION.CREATE_USER,
    payload: user,
});

export const getProductsAction = () => ({
    type: ACTION.GET_PRODUCTS,
});

export const setProductAction = (product, history) => ({
    type: ACTION.SET_PRODUCT,
    payload: { product, history },
});

export const logoutAction = () => ({
    type: ACTION.CLEAR_USER,
});

export const setStarAction = starNumber => ({
    type: ACTION.SET_STAR_REVIEW,
    payload: starNumber,
});

export const getProductReviewsAction = id => ({
    type: ACTION.GET_PRODUCT_REVIEWS,
    payload: id,
});

export const postProductReviewAction = review => ({
    type: ACTION.CREATE_PRODUCT_REVIEW,
    payload: review,
});
