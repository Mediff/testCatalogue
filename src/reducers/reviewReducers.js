import ACTION from '../actions/actionTypes';

const initialState = {
    reviews: null,
    isFetching: false,
    getReviewsError: null,
    createReviewError: null,
    starCount: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_PRODUCT_REVIEWS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                getReviewsError: null,
                reviews: null,
            };
        }
        case ACTION.GET_PRODUCT_REVIEWS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                getReviewsError: null,
                reviews: action.payload,
            };
        }
        case ACTION.GET_PRODUCT_REVIEWS_ERROR: {
            return {
                ...state,
                isFetching: false,
                getReviewsError: action.error,
                reviews: null,
            };
        }
        case ACTION.CREATE_PRODUCT_REVIEW_REQUEST: {
            return {
                ...state,
                isFetching: true,
                createReviewError: null,
                reviews: null,
            };
        }
        case ACTION.CREATE_PRODUCT_REVIEW_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                createReviewError: null,
                reviews: action.payload,
            };
        }
        case ACTION.CREATE_PRODUCT_REVIEW_ERROR: {
            return {
                ...state,
                isFetching: false,
                createReviewError: action.error,
                reviews: null,
            };
        }
        case ACTION.SET_STAR_REVIEW: {
            return {
                ...state,
                starCount: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
