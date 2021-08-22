import { get } from 'lodash';
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE
} from '../../consts/actionTypes';

const initialState = {};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state };
    case SEARCH_MOVIE_ERROR:
      return { ...state };
    case SEARCH_MOVIE_COMPLETE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default search;
