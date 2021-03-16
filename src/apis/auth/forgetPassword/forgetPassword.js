import axios from '../../../lib/axios';

const forgetPassword = (email) => axios
  .post('/auth/forget-password', email)
  .catch((error) => { throw error.response; });

export default forgetPassword;
