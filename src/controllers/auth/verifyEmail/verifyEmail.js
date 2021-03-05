import Verifications from '../../../db/models/verifications';
import Users from '../../../db/models/users';

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    res.status(404).end();

    return;
  }

  const { User: user } = await Verifications.findOne({ where: { token }, include: Users });

  if (!user) {
    res.status(201).end();

    return;
  }

  await user.verifyEmail();

  res.status(201).end();
};

export default verifyEmail;
