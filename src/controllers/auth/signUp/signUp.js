import { hash } from 'bcryptjs';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Users from '../../../db/models/users';
import Verifications from '../../../db/models/verifications';

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
    res.status(400).end();

    return;
  }

  if (!isMobilePhone(mobile, 'en-AU')) {
    res.status(422).end();

    return;
  }

  if (!isEmail(email)) {
    res.status(422).end();

    return;
  }

  const conflictUser = await Users.findOne({ where: { email } });
  if (conflictUser) {
    res.status(409).end();

    return;
  }

  hash(password, 10, async (err, hashedPassword) => {
    const user = await Users.create({ ...requestData, password: hashedPassword });

    await Verifications.createScopedTokenForUser(user.id, Verifications.SCOPE.VERIFY_EMAIL);

    res.status(201).end();
  });
};

export default signup;
