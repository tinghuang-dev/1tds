import { hash } from 'bcryptjs';
import Verifications from '../../../db/models/verifications';

const resetPassword = async (req, res) => {
  const {
    token,
    password,
  } = req.body;

  if (!token && !password) {
    res.status(400).end();

    return;
  }

  const user = await Verifications.getUserByScopedToken(token, Verifications.SCOPE.RESET_PASSWORD);

  if (!user) {
    res.status(404).end();

    return;
  }

  hash(password, 10, async (err, hashedPassword) => {
    user.password = hashedPassword;
    await user.save();
  });

  res.status(201).end();
};
export default resetPassword;
