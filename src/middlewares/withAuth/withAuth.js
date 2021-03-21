import Boom from '@hapi/boom';
import { verify } from 'jsonwebtoken';
import Users from '../../db/models/users';

const withAuth = (next) => async (req, res) => {
  const token = req.headers['x-auth-token'];

  if (!token) {
    throw Boom.badRequest();
  }

  const { JWT_SECRET } = process.env;

  try {
    const requestUser = verify(token, JWT_SECRET);

    if (!requestUser) {
      throw Boom.notFound();
    }

    const user = await Users.findOne({ where: { id: requestUser.id } });

    if (!user) {
      throw Boom.unauthorized();
    }

    req.user = user;

    await next(req, res);
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      throw Boom.unauthorized();
    }

    throw e;
  }
};

export default withAuth;
