import axios from '../../../lib/axios';

const listUsers = (params) => axios
  .get('/admin/users', { params })
  .catch((error) => { throw error.response; });

export default listUsers;
