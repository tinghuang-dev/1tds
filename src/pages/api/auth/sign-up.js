import signUp from '../../../controllers/auth/signUp';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: signUp,
});
