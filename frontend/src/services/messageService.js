import { get, getApiUrl, post, put } from './config';

const getMessages = () => get({ url: getApiUrl(`api/messages/`) });
const markAsRead = (messageId) => put({ url: getApiUrl(`api/messages/${messageId}/read/`) });
const getUnreadMessagesCount = () => get({ url: getApiUrl(`api/messages/unread/count/`) });
const createMessage = (message) =>
  post({
    url: getApiUrl(`api/messages/create/`),
    payload: message,
  });

const messageSerivce = {
  getMessages,
  createMessage,
  markAsRead,
  getUnreadMessagesCount,
};

export default messageSerivce;
