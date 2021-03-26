import Boom from '@hapi/boom';
import { hash, compare } from 'bcryptjs';
import { compose } from 'ramda';
import withUser from '../../../middlewares/withUser';
import withAuth from '../../../middlewares/withAuth';
import withError from '../../../middlewares/withError';

const changePassword = (req, res) => {
  const {
    password,
    newPassword,
  } = req.body;

  const { user } = req;

  compare(password, user.password, (err, result) => {
    if (!result) {
      throw Boom.preconditionFailed();
    }

    hash(newPassword, 10, async (hashedPassword) => {
      user.password = hashedPassword;
      await user.save();

      res.status(201).end();
    });
  });
};
export default compose(
  withAuth,
  withUser,
  withError,
)(changePassword);
