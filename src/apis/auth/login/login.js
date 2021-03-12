import axios from '../../../lib/axios';

const login = (data) => axios
  .post('/auth/login', data)
  .catch((error) => { throw error.response; });

export default login;
