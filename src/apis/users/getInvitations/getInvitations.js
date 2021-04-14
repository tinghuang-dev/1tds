import axios from '../../../lib/axios';

const getInvitations = (userId) => axios
  .get(`/users/${userId}/invitations`)
  .catch((error) => { throw error.response; });

export default getInvitations;
