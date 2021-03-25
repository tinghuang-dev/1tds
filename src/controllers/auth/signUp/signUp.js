import Boom from '@hapi/boom';
import { hash } from 'bcryptjs';
import { compose } from 'ramda';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Users from '../../../db/models/users';
import Verifications from '../../../db/models/verifications';
import mail from '../../../lib/mail';
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

  hash(password, 10, async (err, hashedPassword) => {
    const user = await Users.create({ ...requestData, password: hashedPassword });

    const token = await Verifications.createScopedTokenForUser(
      user.id,
      Verifications.SCOPE.VERIFY_EMAIL,
    );

    await mail.sendEmailVerification(email, token);

    res.status(201).end();
  });
};

export default compose(
  withError,
)(signup);
