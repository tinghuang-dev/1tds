import Boom from '@hapi/boom';
import { hash } from 'bcryptjs';
import { pipe } from 'ramda';
import Verifications from '../../../db/models/verifications';
import withError from '../../../middlewares/withError';

const resetPassword = async (req, res) => {
  const {
    token,
    password,
  } = req.body;

  if (!token && !password) {
    throw Boom.badRequest();
  }

  const user = await Verifications.getUserByScopedToken(token, Verifications.SCOPE.RESET_PASSWORD);

  if (!user) {
    throw Boom.notFound();
  }

  hash(password, 10, async (err, hashedPassword) => {
    user.password = hashedPassword;
    await user.save();
  });

  res.status(201).end();
};
export default pipe(
  withError,
)(resetPassword);
