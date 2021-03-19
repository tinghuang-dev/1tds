import { verify } from 'jsonwebtoken';
import Users from '../../../db/models/users';

const getUser = async (req, res) => {
  const token = req.headers['x-auth-token'];

  if (!token) {
    res.status(400).end();
    return;
  }

  const { JWT_SECRET } = process.env;

  try {
    const requestUser = verify(token, JWT_SECRET);

    if (!requestUser) {
      res.status(404).end();
      return;
    }

    const user = await Users.findOne({ where: { id: requestUser.id } });

    if (!user) {
      res.status(401).end();
      return;
    }

    const responseUser = {
      id: user.id,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
    };

    res.status(200).json(responseUser);
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      res.status(401).end();

      return;
    }

    throw e;
  }
};
export default getUser;