import { hash } from 'bcryptjs';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Users from '../../../db/models/users';
import Verifications from '../../../db/models/verifications';
import mail from '../../../lib/mail';

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

    const token = await Verifications.createScopedTokenForUser(
      user.id,
      Verifications.SCOPE.VERIFY_EMAIL,
    );

    const msg = {
      to: email,
      subject: '[一团袋鼠]请验证你的邮箱',
      text: '请点击链接验证您的邮箱',
      html: `<a style="color: black;" href="http://localhost:3000/api/auth/verify-email?token=${token}">请点击链接验证您的邮箱</a>`,
    };

    await mail.send(msg);

    res.status(201).end();
  });
};

export default signup;
