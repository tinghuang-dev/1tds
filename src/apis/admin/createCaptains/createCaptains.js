import axios from '../../../lib/axios';

const createCaptains = (userId, latlng, data) => axios
  .post(`/admin/users/${userId}/captains`, { data, latlng })
  .catch((error) => { throw error.response; });

export default createCaptains;
