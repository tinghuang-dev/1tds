import axios from '../../../lib/axios';

const getInvitedEmail = (token) => axios
  .get('/auth/get-invited-email', { params: { token } })
  .catch((error) => { throw error.response; });

export default getInvitedEmail;
