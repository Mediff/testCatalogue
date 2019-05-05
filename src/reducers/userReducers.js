import ACTION from '../actions/actionTypes';

const initialState = {
    currentUser: null,
    isFetching: false,
    authError: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                authError: null,
                currentUser: null,
            };
        }
        case ACTION.GET_USER_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                authError: null,
                currentUser: action.payload,
            };
        }
        case ACTION.GET_USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                authError: action.error,
                currentUser: null,
            };
        }
        case ACTION.CREATE_USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                authError: null,
                currentUser: null,
            };
        }
        case ACTION.CREATE_USER_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                authError: null,
                currentUser: action.payload,
            };
        }
        case ACTION.CREATE_USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                authError: action.error,
                currentUser: null,
            };
        }
        case ACTION.CLEAR_USER: {
            return {
                ...state,
                isFetching: false,
                authError: false,
                currentUser: null,
            };
        }
        default: {
            return state;
        }
    }
}
