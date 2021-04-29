import Boom from '@hapi/boom';
import { compose } from 'ramda';
import withError from '../../../../middlewares/withError';
import cms, { MODAL } from '../../../../lib/cms';
import Users from '../../../../db/models/users';

const createCaptain = async (req, res) => {
  const { name } = req.body;

  const { userId } = req.query;

  if (!name) {
    throw Boom.badRequest();
  }

  if (!userId) {
    throw Boom.notFound();
  }

  const user = await Users.findByPk(userId);

  if (!user) {
    throw Boom.notFound();
  }

  const itemType = await cms.fullAccess.itemTypes.find(MODAL.captain);

  const record = await cms.fullAccess.items.create({
    itemType: itemType.id,
    name,
    userid: user.id.toString(),
    description: '',
    products: [],
  });

  res.status(200).json(record);
};
export default compose(
  withError,
)(createCaptain);
