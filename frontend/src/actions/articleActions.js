import {
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_GET_FAIL,
  ARTICLE_GET_SUCCESS,
  ARTICLE_GET_REQUEST,
  ARTICLE_SEARCH_REQUEST,
  ARTICLE_SEARCH_SUCCESS,
  ARTICLE_SEARCH_FAIL,
  ARTICLE_SEARCH_RESET,
} from '../constants/articleConstants';
import { ArticlesService } from '../services';
import { createActionPayload } from './postActions';

export const searchArticles = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_SEARCH_REQUEST });

    const data = await ArticlesService.getArticlesByKeyword(keyword);

    dispatch({
      type: ARTICLE_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(createActionPayload(ARTICLE_SEARCH_FAIL, error));
  }
};

export const createArticle = (articleData, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: ARTICLE_CREATE_REQUEST });

    // hard coding tags for now because backend api requires it
    const article = await ArticlesService.createArticle({ ...articleData, tags: '' });

    dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      payload: article,
    });

    history.push(`/article/${article.id}`);
  } catch (error) {
    dispatch(createActionPayload(ARTICLE_CREATE_FAIL, error));
  }
};

export const resetSearchArticles = () => async (dispatch) => {
  dispatch({
    type: ARTICLE_SEARCH_RESET,
  });
};

export const getArticle = (articleId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ARTICLE_GET_REQUEST });

    const article = await ArticlesService.getArticle(articleId);

    dispatch({
      type: ARTICLE_GET_SUCCESS,
      payload: article,
    });
  } catch (error) {
    dispatch(createActionPayload(ARTICLE_GET_FAIL, error));
  }
};
