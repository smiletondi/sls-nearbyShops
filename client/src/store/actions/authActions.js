import API from "../../api";
// import { his } from "react-router-dom";

export const SIGN_IN_BEGIN = "SIGN_IN_BEGIN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCES";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCES";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCES";
export const UPDATE_USER_STATE = "UPDATE_USER_STATE"

export const signIn = (payload, History) => (dispatch, getState) => {
    // API call
    dispatch({
        type: SIGN_IN_BEGIN
    })
    API({
        url: ("/signin"),
        method: "POST",
        data: payload
    }).then(({ data }) => {
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        });

        // Redirecting to /nearbyShops
        History.push("/nearbyshops");
    }).catch(err => {
        dispatch({
            type: SIGN_IN_ERROR,
            payload: err.response.data
        })
    })
};

export const signOut = payload => (dispatch, getState) => {
    return dispatch({
        type: SIGN_OUT_SUCCESS
    });
}

export const signUp = (payload, History) => (dispatch, getState) => {
    // API call
    API({
        url: ("/signup"),
        method: "POST",
        data: payload
    }).then(() => {
        dispatch({
            type: SIGN_UP_SUCCESS
        });

        // Redirecting to /signin
        History.push("/signin");
    }).catch(err => {
        dispatch({
            type: SIGN_UP_ERROR,
            payload: err.response.data.data.msg
        })
    })
};

export const updateUserState = payload => (dispatch, getState) => {
    return dispatch({
        type: UPDATE_USER_STATE,
        payload
    });
}