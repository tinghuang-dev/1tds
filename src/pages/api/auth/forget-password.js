import forgetPassword from '../../../controllers/auth/forgetPassword';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: forgetPassword,
});
