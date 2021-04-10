import { MUMBLETHEME } from '../constants/localConstants';

// Toggle Sidebar
export const toggleTheme = () => async (dispatch) => {
  dispatch({
    type: MUMBLETHEME,
  });
};
