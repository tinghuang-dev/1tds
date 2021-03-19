import axios from '../../../lib/axios';

const resetPassword = (params) => axios
  .post('/auth/reset-password', params)
  .catch((error) => { throw error.response; });

export default resetPassword;
