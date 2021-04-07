import { formatDistanceToNow } from 'date-fns';

export const sqlDateToJsDate = (date) => new Date(date.replace(' ', ''));

export const distanceDate = (date) =>
  formatDistanceToNow(sqlDateToJsDate(date), { addSuffix: true });

const formatDate = { sqlDateToJsDate, distanceDate };
export default formatDate;
