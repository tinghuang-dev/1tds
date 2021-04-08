import getInvitedEmail from '../../../controllers/auth/getInvitedEmail';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  GET: getInvitedEmail,
});
