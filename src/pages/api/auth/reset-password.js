import resetPassword from '../../../controllers/auth/resetPassword';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: resetPassword,
});
