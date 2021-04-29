import activatedUser from '../../../../../controllers/admin/users/activatedUser';
import withMethod from '../../../../../middlewares/withMethod';

export default withMethod({
  PATCH: activatedUser,
});
