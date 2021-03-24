import updateUser from '../../../controllers/users';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  PATCH: updateUser,
});
