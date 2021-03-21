import Boom from '@hapi/boom';
import { pipe } from 'ramda';
import withError from '../../../middlewares/withError';
import Verifications from '../../../db/models/verifications';

const verifyEmail = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    throw Boom.badRequest();
  }

  const user = await Verifications.getUserByScopedToken(token, Verifications.SCOPE.VERIFY_EMAIL);

  if (!user) {
    throw Boom.notFound();
  }

  await user.verifyEmail();

  res.status(201).end();
};

export default pipe(
  withError,
)(verifyEmail);
