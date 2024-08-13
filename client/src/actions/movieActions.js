
import axios from 'axios';
import { GET_GENRES,FETCH_FAIL,FETCH_TRENDING_FAILURE,FETCH_TRENDING_REQUEST,FETCH_TRENDING_SUCCESS } from './types';
import { returnErrors } from './errorActions';

import { API_KEY, TMDB_BASE_URL } from "../utils/Config.jsx";
  
export const getGenres = () => dispatch =>{
    
    const URL =`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

    axios.get(URL)
                .then(res=>dispatch({
                    type:GET_GENRES,
                    payload:res.data
                }))
                .catch((error)=>{
                    const errorMessage = error.response ? error.response.data : 'Network Error';
                    const errorStatus = error.response ? error.response.status : 500;
                    dispatch(returnErrors(errorMessage, errorStatus,'FETCH_FAIL'));
                    dispatch({
                        type: FETCH_FAIL
                    });
               })
}

  
const createArrayFromRawData = (array = [], moviesArray, genres) => {
    array.forEach((movie) => {
      const movieGenres = movie.genre_ids.map((genreId) => {
        const genre = genres.find(({ id }) => id === genreId);
        return genre ? genre.name : null;
      }).filter(Boolean); // Remove any null values
  
      if (movie.backdrop_path) {
        moviesArray.push({
          id: movie.id,
          name: movie.original_name || movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
          release:movie.release_date,
          overview:movie.overview
        });
      }
    });
  };
  
  const getRawData = async (api, genres, paging = false) => {
    const moviesArray = [];
    const promises = [];
  
    try {
      for (let i = 1; i < 10; i++) {
        if (moviesArray.length >= 60) break;
        const url = `${api}${paging ? `&page=${i}` : ""}`;
        promises.push(axios.get(url));
      }
  
      const results = await Promise.all(promises);
  
      results.forEach((response) => {
        if (response.data && response.data.results) {
          createArrayFromRawData(response.data.results, moviesArray, genres);
        }
      });
  
      return moviesArray;
    } catch (error) {
      console.error("Error fetching raw data:", error);
      return []; // Return an empty array or handle the error accordingly
    }
  };
  
  
  
  export const fetchMovies = ({ type }) => async (dispatch, getState) => {
    dispatch({ type: FETCH_TRENDING_REQUEST });
  
    const {
      movie: { genres :genresObject},
    } = getState();
    const genres = genresObject.genres ||[];
    try {
      const url = `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`;
      const data = await getRawData(url, genres, true);
      dispatch({ type: FETCH_TRENDING_SUCCESS, payload: data });
    } catch (error) {
      const errorMessage = error.response ? error.response.data : 'Network Error';
      dispatch({ type: FETCH_TRENDING_FAILURE, payload: errorMessage });
    }
  };


 