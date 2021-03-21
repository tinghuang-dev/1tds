import withMethod from '../../../middlewares/withMethod';
import verifyEmail from '../../../controllers/auth/verifyEmail';

export default withMethod({
  POST: verifyEmail,
});
