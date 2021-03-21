import withMethod from '../../../middlewares/withMethod';
import resetPassword from '../../../controllers/auth/resetPassword';

export default withMethod({
  POST: resetPassword,
});
