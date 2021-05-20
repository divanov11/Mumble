import { SEARCH_BAR_TYPED } from '../constants/appConstants';

export const searchBarTyped = (keyword = '') => async (dispatch) => {
  dispatch({ type: SEARCH_BAR_TYPED, payload: keyword });
};
