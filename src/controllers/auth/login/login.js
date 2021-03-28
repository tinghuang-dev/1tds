import Boom from '@hapi/boom';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { compose } from 'ramda';
import Users from '../../../db/models/users';
import withError from '../../../middlewares/withError';

const login = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const user = await Users.findOne({ where: { email } });

  if (!user) {
    throw Boom.notFound();
  }

  if (user.status === 'PENDING_VERIFICATION') {
    throw Boom.preconditionFailed();
  }

  const result = await compare(password, user.password);
  if (!result) {
    throw Boom.notFound();
  }

  const { JWT_SECRET } = process.env;

  const tokenData = {
    id: user.id,
    email,
  };

  const token = sign(tokenData, JWT_SECRET, { expiresIn: '15m' });

  res.setHeader('X-Auth-Token', token);

  const responseData = {
    id: user.id,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
  };

  res.status(200).json(responseData);
};
export default compose(
  withError,
)(login);
