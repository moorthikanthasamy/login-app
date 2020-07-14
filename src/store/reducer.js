import ACTION_TYPES from "./action-types";

const INITIAL_STATE = {
    userInfo: {
        username: ""
    },
    isLoggedIn: false,
    loginError: "",
    searchResults: []
};
export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            sessionStorage.setItem('authenticated', JSON.stringify({ username: payload }));
            state = {
                ...state,
                userInfo: {
                    username: payload
                },
                isLoggedIn: true
            }
            break;
        case ACTION_TYPES.LOGIN_FAILED:
            state = {
                ...state, loginError: payload
            }
            break;
        case ACTION_TYPES.LOGOUT:
            sessionStorage.removeItem("authenticated")
            state = {
                ...state,
                userInfo: { username: "" },
                isLoggedIn: false
            }
            break;
        case ACTION_TYPES.SEARCH_SUCCESS:
            state = {
                ...state,
                searchResults: payload
            }
            break;
        case ACTION_TYPES.SEARCH_FAILED:
            state = {
                ...state,
                searchResults: []
            }
            break;
        default:
            return state;
    }
    return state;
}