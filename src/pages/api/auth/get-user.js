import getUser from '../../../controllers/auth/getUser';
import withMethod from '../../../middlewares/withMethod';

export default withMethod({
  GET: getUser,
});
