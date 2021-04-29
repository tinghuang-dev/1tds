import Boom from '@hapi/boom';
import { compose } from 'ramda';
import withError from '../../../../middlewares/withError';
import Users from '../../../../db/models/users';

const activatedUser = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    throw Boom.notFound();
  }

  const user = await Users.findByPk(userId);

  if (!user) {
    throw Boom.notFound();
  }

  if (user.status !== 'PENDING_VERIFICATION') {
    throw Boom.badRequest();
  }

  await Users.update({ status: 'ACTIVE' }, { where: { id: userId } });

  res.status(201).end();
};
export default compose(
  withError,
)(activatedUser);
