import resendEmail from '../../../controllers/auth/resendEmail';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: resendEmail,
});
