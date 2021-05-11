/* Get API List Movies */

import Types from './actionTypes';
import {apiConfig} from '../config/rootConfig';
import axios from 'axios';

export const fetchList = page => {
  return async dispatch => {
    dispatch({type: Types.FETCH_LIST_MOVIES_REQUEST});
    try {
      const resultData = await axios.get(
        `${apiConfig.BASE_URL}/movie/now_playing?api_key=${apiConfig.API_KEY}&language=${apiConfig.LANG}&page=${page}`,
      );
      dispatch({
        type: Types.FETCH_LIST_MOVIES_SUCCESS,
        payload: resultData.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const searchMovieWithName = query => {
  const url = `${apiConfig.BASE_URL}/search/movie?api_key=${apiConfig.API_KEY}&language=${apiConfig.LANG}&query=${query}&page=1&include_adult=false`;

  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        return json.results;
      })
      .then(data =>
        dispatch({type: Types.SEARCH_MOVIE_WITH_NAME_SUCCESS, payload: data}),
      );
  };
};

export const refreshControl = () => {
  fetchList(1);
};
