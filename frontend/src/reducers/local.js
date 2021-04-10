import { MUMBLETHEME } from '../constants/localConstants';

// localStorage store as a string, So this will convert into boolean
const isDarkTheme = localStorage.getItem('mumble-theme') === 'true' ? true : false;
const isNull = localStorage.getItem('mumble-theme') === null;

const initialState = {
  darkTheme: isNull ? false : isDarkTheme,
};

export default function localReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case MUMBLETHEME:
      localStorage.setItem('mumble-theme', !state.darkTheme);
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
}
