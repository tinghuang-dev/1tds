import Users from '../../../db/models/users';
import Verifications from '../../../db/models/verifications';
import mail from '../../../lib/mail';

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).end();

    return;
  }

  const user = await Users.findOne({ where: { email } });

  if (!user) {
    res.status(201).end();

    return;
  }

  const token = await Verifications.createScopedTokenForUser(
    user.id,
    Verifications.SCOPE.RESET_PASSWORD,
  );

  await mail.sendResetPassword(email, token);

  res.status(201).end();
};

export default forgetPassword;
