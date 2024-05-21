import {
    GET_GENRES,
    FETCH_FAIL,
    FETCH_GENRE_REQUEST,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_FAILURE,
    FETCH_TRENDING_REQUEST,
    FETCH_TRENDING_SUCCESS,
    FETCH_TRENDING_FAILURE,
    GET_LIKED_MOVIES_REQUEST,
    GET_LIKED_MOVIES_SUCCESS,
    GET_LIKED_MOVIES_FAILURE,
    REMOVE_MOVIE_REQUEST,
    REMOVE_MOVIE_SUCCESS,
    REMOVE_MOVIE_FAILURE
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

        case FETCH_GENRE_REQUEST:
        case FETCH_TRENDING_REQUEST:
        case GET_LIKED_MOVIES_REQUEST:
        case REMOVE_MOVIE_REQUEST:

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
        case FETCH_GENRE_SUCCESS:
        case GET_LIKED_MOVIES_SUCCESS:
        case REMOVE_MOVIE_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    movies: action.payload
                }
        case FETCH_FAIL:
        case FETCH_GENRE_FAILURE:
        case FETCH_TRENDING_FAILURE:
        case GET_LIKED_MOVIES_FAILURE:
        case REMOVE_MOVIE_FAILURE:
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