import resendInvitation from '../../../../../../controllers/users/invitations/resendInvitation';
import withMethod from '../../../../../../middlewares/withMethod';

export default withMethod({
  POST: resendInvitation,
});
