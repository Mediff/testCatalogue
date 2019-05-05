import ACTION from '../actions/actionTypes';

const initialState = {
    products: null,
    currentProduct: null,
    isFetching: false,
    productError: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_PRODUCT: {
            return {
                ...state,
                currentProduct: action.payload,
            };
        }
        case ACTION.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                productError: null,
                products: null,
            };
        }
        case ACTION.GET_PRODUCTS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                productError: null,
                products: action.payload,
            };
        }
        case ACTION.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                isFetching: false,
                productError: action.error,
                products: null,
            };
        }
        default: {
            return state;
        }
    }
}
