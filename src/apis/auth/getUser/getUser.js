import axios from '../../../lib/axios';

const getUser = () => axios
  .get('/auth/get-user')
  .catch((error) => { throw error.response; });

export default getUser;
