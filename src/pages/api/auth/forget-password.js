import withMethod from '../../../middlewares/withMethod';
import forgetPassword from '../../../controllers/auth/forgetPassword';

export default withMethod({
  POST: forgetPassword,
});
