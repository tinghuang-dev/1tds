import Boom from '@hapi/boom';
import { pipe } from 'ramda';
import Users from '../../../db/models/users';
import Verifications from '../../../db/models/verifications';
import mail from '../../../lib/mail';
import withError from '../../../middlewares/withError';

const resendEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw Boom.badRequest();
  }

  const user = await Users.findOne({ where: { email } });

  if (!user) {
    res.status(201).end();

    return;
  }

  const token = await Verifications.createScopedTokenForUser(
    user.id,
    Verifications.SCOPE.VERIFY_EMAIL,
  );

  await mail.sendEmailVerification(email, token);

  res.status(201).end();
};

export default pipe(
  withError,
)(resendEmail);
