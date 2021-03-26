import changePassword from '../../../../controllers/users/changePassword';
import withMethod from '../../../../middlewares/withMethod';

export default withMethod({
  PUT: changePassword,
});
