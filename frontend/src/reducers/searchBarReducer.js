import { SEARCH_BAR_TYPED } from '../constants/appConstants';

export const searchBarReducer = (state = { input: '' }, action) => {
  switch (action.type) {
    case SEARCH_BAR_TYPED:
      return { input: action.payload };

    default:
      return state;
  }
};
