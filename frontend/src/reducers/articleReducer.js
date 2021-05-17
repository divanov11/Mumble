import {
  ARTICLE_CREATE_FAIL,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_GET_REQUEST,
  ARTICLE_GET_SUCCESS,
  ARTICLE_GET_FAIL,
  ARTICLE_SEARCH_REQUEST,
  ARTICLE_SEARCH_SUCCESS,
  ARTICLE_SEARCH_FAIL,
  ARTICLE_SEARCH_RESET,
} from '../constants/articleConstants';

export const createArticleReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true, articles: [] };

    case ARTICLE_CREATE_SUCCESS:
      return { loading: false, articles: action.payload };

    case ARTICLE_CREATE_FAIL:
      return { loading: false, articles: [], error: action.payload };

    default:
      return state;
  }
};

export const articlePageReducer = (state = { article: { tags: '' } }, action) => {
  switch (action.type) {
    case ARTICLE_GET_REQUEST:
      return { ...state, loading: true };

    case ARTICLE_GET_SUCCESS:
      return { ...state, loading: false, article: action.payload };

    case ARTICLE_GET_FAIL:
      return { ...state, loading: false, article: {}, error: action.payload };

    default:
      return state;
  }
};

export const articleSearchListReducer = (
  state = { data: { results: [], next: null, previous: null, count: 0 } },
  action,
) => {
  switch (action.type) {
    case ARTICLE_SEARCH_REQUEST:
      return { ...state, loading: true };

    case ARTICLE_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload, results: [...state.data.results, ...action.payload.results] },
      };

    case ARTICLE_SEARCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ARTICLE_SEARCH_RESET:
      return { data: { results: [], next: null, previous: null, count: 0 } };

    default:
      return state;
  }
};
