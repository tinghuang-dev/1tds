import listUsers from '../../../controllers/admin/users/listUsers';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  GET: listUsers,
});
