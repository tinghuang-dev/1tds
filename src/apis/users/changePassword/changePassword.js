import axios from '../../../lib/axios';

const changePassword = (userId, data) => axios
  .put(`/users/${userId}/password`, data)
  .catch((error) => { throw error.response; });

export default changePassword;
