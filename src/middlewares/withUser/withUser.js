import Boom from '@hapi/boom';
import Users from '../../db/models/users';

const withUser = (next) => async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    throw Boom.notFound();
  }

  if (parseInt(userId, 10) !== req.user.id) {
    throw Boom.unauthorized();
  }

  const user = await Users.findByPk(userId);
  req.user = user;
  await next(req, res);
};

export default withUser;
