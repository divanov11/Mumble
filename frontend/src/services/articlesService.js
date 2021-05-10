import { post, getApiUrl, get } from './config';

const createArticle = (postContent) =>
  post({
    url: getApiUrl(`api/articles/create/`),
    payload: postContent,
  });

const getArticle = (articleId) =>
  get({
    url: getApiUrl(`api/articles/${articleId}/`),
  });

const getArticlesByKeyword = (keyword) => get({ url: getApiUrl(`api/articles/${keyword}`) });

const articlesService = {
  createArticle,
  getArticlesByKeyword,
  getArticle,
};

export default articlesService;
