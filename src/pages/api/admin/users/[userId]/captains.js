import createCaptain from '../../../../../controllers/admin/captains/createCaptain';
import withMethod from '../../../../../middlewares/withMethod';

export default withMethod({
  POST: createCaptain,
});
