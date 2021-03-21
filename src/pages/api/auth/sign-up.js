import withMethod from '../../../middlewares/withMethod';
import signUp from '../../../controllers/auth/signUp';

export default withMethod({
  POST: signUp,
});
