import Boom from '@hapi/boom';
import { compose } from 'ramda';
import Users from '../../db/models/users';
import withAuth from '../../middlewares/withAuth';
import withError from '../../middlewares/withError';

const updateUser = async (req, res) => {
  const {
    mobile,
    address,
  } = req.body;

  const { userId } = req.query;

  if (!userId) {
    throw Boom.notFound();
  }

  if (userId !== req.user.id) {
    throw Boom.unauthorized();
  }

  const user = await Users.findByPk(userId);
  user.mobile = mobile;
  user.address = address;
  user.save();

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
  withError,
)(updateUser);
