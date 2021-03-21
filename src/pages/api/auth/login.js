import withMethod from '../../../middlewares/withMethod';
import login from '../../../controllers/auth/login';

export default withMethod({
  POST: login,
});
