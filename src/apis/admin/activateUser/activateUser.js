import axios from '../../../lib/axios';

const activateUser = (userId) => axios
  .patch(`/admin/users/${userId}`)
  .catch((error) => { throw error.response; });

export default activateUser;
