import ACTION_TYPES from "./action-types";

const INITIAL_STATE = {
    userInfo: {
        username: ""
    },
    isLoggedIn: false,
    loginError: ""
};
export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            localStorage.setItem('authenticated', JSON.stringify({ username: payload }));
            state = {
                ...state,
                userInfo: {
                    username: payload
                },
                isLoggedIn: true
            }
            break;
        case ACTION_TYPES.LOGIN_FAILED:
            console.log('inside LOGOUT state ', payload)
            state = {
                ...state, loginError: payload
            }
            break;
        case ACTION_TYPES.LOGOUT:
            localStorage.removeItem("authenticated")
            state = {
                ...state,
                userInfo: { username: "" },
                isLoggedIn: false
            }
            break;
        default:
            return state;
    }
    return state;
}