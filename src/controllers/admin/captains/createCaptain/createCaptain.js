import Boom from '@hapi/boom';
import { compose } from 'ramda';
import Users from '../../../../db/models/users';
import withError from '../../../../middlewares/withError';
import withAuth from '../../../../middlewares/withAuth';
import cms, { MODAL } from '../../../../lib/cms';

const createCaptain = async (req, res) => {
  const { userId } = req.query;
  const { name } = req.body;

  if (!name || !userId) {
    throw Boom.badRequest();
  }

  // TODO: withUser
  const user = await Users.findByPk(userId);

  if (!user) {
    throw Boom.notFound();
  }

  const itemType = await cms.fullAccess.itemTypes.find(MODAL.captain);
  const record = await cms.fullAccess.items.create({
    itemType: itemType.id,
    name,
    user_id: userId,
    products: [],
  });

  res.status(200).json(record);
};
export default compose(
  withError,
  withAuth,
)(createCaptain);
