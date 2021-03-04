import axios from '../../../lib/axios';

const signUp = (data) => axios
  .post('/sign-up', data)
  .catch((error) => { throw error.response; });

export default signUp;
