import inviteMembers from '../../../controllers/auth/inviteMembers';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  POST: inviteMembers,
});
