const apiEndpointURL = process.env.REACT_APP_API_ENDPOINT || 'https://mumbleapi.herokuapp.com/api';
// if (!apiEndpointURL)
//   throw new Error(
//     `'apiEndpoint' is a required environment variable. If not set yet, please add API endpoint to 'REACT_APP_API_ENDPOINT' variable in environment variable from your hosting dashboard in production or in '.env' file in development'`,
//   );

export const apiEndpoint = {
  getPosts: `${apiEndpointURL}/posts`,
  getPostById: (postId) => `${apiEndpointURL}/posts/${postId}`,
  getUsers: `${apiEndpointURL}/users`,
  getPostsByUserId: (userId) => `${apiEndpointURL}/users/post/${userId}`,
};
