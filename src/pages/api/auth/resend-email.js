import withMethod from '../../../middlewares/withMethod';
import resendEmail from '../../../controllers/auth/resendEmail';

export default withMethod({
  POST: resendEmail,
});
