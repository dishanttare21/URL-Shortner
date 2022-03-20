import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    const api = process.env.REACT_APP_HOSTED_BASE_URL;
    console.log(api);
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post(`${api}auth/login`, userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
        dispatch({type: "LOGIN_FALIURE", payload: error.response.data});
    }
}

export const logoutCall = async (dispatch) => {
    dispatch({type: "LOGOUT", payload: null})
}