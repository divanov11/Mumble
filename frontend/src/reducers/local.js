import { MUMBLETHEME } from '../constants/localConstants';

const initialState = {
  darkTheme: false,
};

export default function localReducer(state = initialState, action) {
  switch (action.type) {
    case MUMBLETHEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
}
