import { get, getApiUrl, post } from './config';

const getMessages = () => get({ url: getApiUrl(`api/messages/`) });
const createMessage = (message) =>
  post({
    url: getApiUrl(`api/messages/create/`),
    payload: message,
  });

const messageSerivce = {
  getMessages,
  createMessage,
};

export default messageSerivce;
