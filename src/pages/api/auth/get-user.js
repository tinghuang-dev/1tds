import withMethod from '../../../middlewares/withMethod';
import getUser from '../../../controllers/auth/getUser';

export default withMethod({
  GET: getUser,
});
