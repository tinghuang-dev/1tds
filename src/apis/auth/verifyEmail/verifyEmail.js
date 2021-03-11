import axios from '../../../lib/axios';

const verifyEmail = (token) => axios
  .post('/auth/verify-email', { token })
  .catch((error) => { throw error.response; });

export default verifyEmail;
