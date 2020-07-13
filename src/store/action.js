import ACTION_TYPES from "./action-types";
import CONSTANTS from "../util/constants";

const Logout = dispatch => {
    dispatch({ type: ACTION_TYPES.LOGOUT, payload: {} });
}
const Login = async (dispatch, form) => {
    const { BASE_URL, SEARCH_API } = CONSTANTS;
    const url = `${BASE_URL}${SEARCH_API}${form.username}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.count > 0 && data.results[0] && form.password === data.results[0].birth_year) {
            dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: form.username });
        } else {
            dispatch({ type: ACTION_TYPES.LOGIN_FAILED, payload: "Authentication Failed" });
        }

    } catch (error) {
        dispatch({ type: ACTION_TYPES.LOGIN_FAILED, payload: error });
    }
}
export default { Login, Logout };