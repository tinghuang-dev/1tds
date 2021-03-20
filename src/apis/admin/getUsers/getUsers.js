import axios from '../../../lib/axios';

const getUsers = (params) => axios
  .get('/admin/users', { params })
  .catch((error) => { throw error.response; });

export default getUsers;
