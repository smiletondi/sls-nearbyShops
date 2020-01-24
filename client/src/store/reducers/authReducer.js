import {
    SIGN_IN_BEGIN, SIGN_IN_SUCCESS, SIGN_IN_ERROR,
    SIGN_OUT_SUCCESS, UPDATE_USER_STATE,
    SIGN_UP_SUCCESS, SIGN_UP_ERROR

} from "../actions/authActions";

const initState = {
    loading: false,
    user: null,
    error: null,
    signUp: {
        success: false,
        error: null
    }
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN_BEGIN:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_SUCCESS:
            console.log("Login success");
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }
        case SIGN_IN_ERROR:
            console.log("Login Error");
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload.message
            }
        case SIGN_UP_SUCCESS:
            console.log("Signup success");
            return {
                ...state,
                signUp: {
                    success: true,
                    error: false
                }
            };
        case SIGN_UP_ERROR:
            console.log("Signup Error");
            return {
                ...state,
                signUp: {
                    success: false,
                    error: action.payload
                }
            };
        case SIGN_OUT_SUCCESS:
            console.log("SignOut success");
            localStorage.removeItem("user");
            return initState
        case UPDATE_USER_STATE:
            console.log("user state updated");
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;