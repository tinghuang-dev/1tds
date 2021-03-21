import verifyEmail from '../../../controllers/auth/verifyEmail';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: verifyEmail,
});
