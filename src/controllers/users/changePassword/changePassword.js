import Boom from '@hapi/boom';
import { hash, compare } from 'bcryptjs';
import { compose } from 'ramda';
import withUser from '../../../middlewares/withUser';
import withAuth from '../../../middlewares/withAuth';
import withError from '../../../middlewares/withError';

const changePassword = async (req, res) => {
  const {
    password,
    newPassword,
  } = req.body;

  const { user } = req;

  const result = await compare(password, user.password);

  if (!result) {
    throw Boom.preconditionFailed();
  }

  const hashedPassword = await hash(newPassword, 10);

  user.password = hashedPassword;
  await user.save();

  res.status(201).end();
};
export default compose(
  withAuth,
  withUser,
  withError,
)(changePassword);
