import login from '../../../controllers/auth/login';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: login,
});
