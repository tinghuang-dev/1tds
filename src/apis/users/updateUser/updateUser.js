import axios from '../../../lib/axios';

const updateUser = (userId, data) => axios
  .patch(`/users/${userId}`, data)
  .catch((error) => { throw error.response; });

export default updateUser;
