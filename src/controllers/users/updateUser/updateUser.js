import { compose } from 'ramda';
import withUser from '../../../middlewares/withUser';
import withAuth from '../../../middlewares/withAuth';
import withError from '../../../middlewares/withError';

const updateUser = async (req, res) => {
  const {
    mobile,
    address,
  } = req.body;

  const { user } = req;

  user.mobile = mobile;
  user.address = address;
  await user.save();

  const responseData = {
    id: user.id,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
  };

  res.status(200).json(responseData);
};
export default compose(
  withAuth,
  withUser,
  withError,
)(updateUser);
