import {combineReducers} from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import movieReducer from './movieReducer';



export default combineReducers({
   
    error:errorReducer,
    auth:authReducer,
    movie:movieReducer
})