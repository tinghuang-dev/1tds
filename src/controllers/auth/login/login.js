import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import Users from '../../../db/models/users';

const login = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const user = await Users.findOne({ where: { email } });

  if (!user) {
    res.status(404).end();

    return;
  }

  if (user.status === 'PENDING_VERIFICATION') {
    res.status(412).end();

    return;
  }

  compare(password, user.password, async (err, result) => {
    if (!result) {
      res.status(404).end();

      return;
    }

    const { JWT_SECRET } = process.env;

    const tokenData = {
      id: user.id,
      email,
    };

    const token = sign(tokenData, JWT_SECRET, { expiresIn: '1h' });

    res.setHeader('X-Auth-Token', token);

    const responseData = {
      id: user.id,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
    };

    res.status(200).json(responseData);
  });
};
export default login;
