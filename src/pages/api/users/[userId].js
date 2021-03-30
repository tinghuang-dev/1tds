import updateUser from '../../../controllers/users/updateUser';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  PATCH: updateUser,
});
