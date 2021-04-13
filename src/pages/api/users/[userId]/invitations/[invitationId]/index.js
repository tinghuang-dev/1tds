import deleteInvitation from '../../../../../../controllers/users/invitations/deleteInvitation';
import withMethod from '../../../../../../middlewares/withMethod';

export default withMethod({
  DELETE: deleteInvitation,
});
