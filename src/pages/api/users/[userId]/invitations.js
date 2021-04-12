import getInvitations from '../../../../controllers/users/getInvitations';
import withMethod from '../../../../middlewares/withMethod';

export default withMethod({
  GET: getInvitations,
});
