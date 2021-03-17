import Axios from 'axios';

const AUTH_TOKEN = 'AUTH_TOKEN';

const extractAuthTokenFromResponse = (response) => {
  const authToken = response.headers['x-auth-token'];

  if (authToken) {
    localStorage.setItem(AUTH_TOKEN, authToken);
  }

  return response;
};

const appendAuthTokenToRequest = (config) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  if (authToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers['x-auth-token'] = authToken;
  }
  return config;
};

const axios = Axios.create({
  baseURL: '/api',
});
export default axios;

axios.interceptors.request.use(appendAuthTokenToRequest);
axios.interceptors.response.use(extractAuthTokenFromResponse);
