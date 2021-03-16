import axios from '../../../lib/axios';

const resetPassword = (password, token) => axios
  .post('/auth/reset-password', { password, token })
  .catch((error) => { throw error.response; });

export default resetPassword;
