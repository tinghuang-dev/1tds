import Boom from '@hapi/boom';
import { hash } from 'bcryptjs';
import { compose } from 'ramda';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Users from '../../../db/models/users';
import Invitations from '../../../db/models/invitations';
import Verifications from '../../../db/models/verifications';
import mail from '../../../lib/mail';
import createAuthToken from '../../../utils/createAuthToken';
import withError from '../../../middlewares/withError';

const signup = async (req, res) => {
  const {
    mobile,
    email,
    address,
    password,
  } = req.body;

  const requestData = {
    mobile,
    email,
    address,
    password,
  };

  const emptyFields = Object.values(requestData).filter((field) => !field);
  if (emptyFields.length) {
    throw Boom.badRequest();
  }

  if (!isMobilePhone(mobile, 'en-AU')) {
    throw Boom.badData();
  }

  if (!isEmail(email)) {
    throw Boom.badData();
  }

  const conflictUser = await Users.findOne({ where: { email } });
  if (conflictUser) {
    throw Boom.conflict();
  }

  const hashedPassword = await hash(password, 10);

  const user = await Users.create({ ...requestData, password: hashedPassword });

  const verificationToken = await Verifications.createScopedTokenForUser(
    user.id,
    Verifications.SCOPE.VERIFY_EMAIL,
  );

  await mail.sendEmailVerification(email, verificationToken);

  await Invitations.update({ invitedUserId: user.id }, { where: { email } });

  const tokenData = {
    id: user.id,
    status: user.status,
  };

  const token = createAuthToken(tokenData);

  res.setHeader('X-Auth-Token', token);

  res.status(201).end();
};

export default compose(
  withError,
)(signup);
