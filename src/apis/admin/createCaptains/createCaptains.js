import axios from '../../../lib/axios';

const createCaptains = (userId, data) => axios
  .post(`/admin/users/${userId}/captains`, data)
  .catch((error) => { throw error.response; });

export default createCaptains;
