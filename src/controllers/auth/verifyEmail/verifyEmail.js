import Verifications from '../../../db/models/verifications';

const verifyEmail = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(400).end();

    return;
  }

  const user = await Verifications.getUserByScopedToken(token, Verifications.SCOPE.VERIFY_EMAIL);

  if (!user) {
    res.status(404).end();

    return;
  }

  await user.verifyEmail();

  res.status(201).end();
};

export default verifyEmail;
