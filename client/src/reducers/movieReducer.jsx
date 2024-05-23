import {
    GET_GENRES,
    FETCH_FAIL,
    FETCH_TRENDING_REQUEST,
    FETCH_TRENDING_SUCCESS,
    FETCH_TRENDING_FAILURE

} from '../actions/types';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
    loading:true,
    error: null,
  };

function movieReducer (state=initialState, action){
    switch(action.type){

        case FETCH_TRENDING_REQUEST:
            return{
                ...state,
                loading: true
            };

        case GET_GENRES:
            return{
                ...state,
                loading:false,
                genresLoaded:true,
                genres:action.payload
            }

        case FETCH_TRENDING_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    movies: action.payload
                }
        case FETCH_FAIL:
        case FETCH_TRENDING_FAILURE:
            return{
                movies: [],
                genresLoaded: false,
                genres: [],
                loading:true,
                error: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;