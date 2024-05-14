import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from '../actions/types';

const initialState = {
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
    userId: null
}

function authReducer (state=initialState, action){
    switch(action.type){

        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
            }

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            localStorage.setItem("userId",action.payload.id);
            localStorage.setItem("token", action.payload.accessToken);
            
            return{
                ...state,
                accessToken: localStorage.getItem("token"),
                userId: localStorage.getItem("userId"),
                isAuthenticated: true,
                isLoading: false
            };


        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case SIGNUP_FAIL:
            localStorage.clear();
            return{
                ...state,
                accessToken: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default authReducer;