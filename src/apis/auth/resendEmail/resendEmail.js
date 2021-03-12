import axios from '../../../lib/axios';

const resendEmail = (email) => axios
  .post('/auth/resend-email', { email })
  .catch((error) => { throw error.response; });

export default resendEmail;
