import  AxiosInstance  from '../utils/axiosInstance';
import { SIGNUP_SUCCESS,SIGNUP_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS } from './types';
import { returnErrors } from './errorActions';

//signup user
export const signUp = (user) => dispatch => {

    const URL = "/api/auth/signup";

    AxiosInstance.post(URL, user)
                 .then(res=>dispatch({
                        type: SIGNUP_SUCCESS,
                        payload:res.data
                    }))
                .catch((error)=>{
                         dispatch(returnErrors(error.response.data,error.response.status,'SIGNUP_FAIL'));
                         dispatch({
                             type: SIGNUP_FAIL
                         });
                    })

}

//login user
export const login = (user)=> dispatch => {

    const URL = '/api/auth/login';

    AxiosInstance.post(URL, user)
                 .then (res=>dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                 }))
                 .catch(error => {
                             dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
                             dispatch({
                                    type: LOGIN_FAIL
                                 });
                     });
}


// logout user
export const logout = (dispatch) =>{
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

// Setup config/headers and token
export const tokenConfig = () => {
    //Get token from local storage
    const accessToken = localStorage.getItem("token");

    // Headers
    const config = {
        headers:{
            // "Content-type": "application/json",
        }
    }

    if(accessToken){
        config.headers['x-access-token'] = accessToken;
    }

    return config;
}