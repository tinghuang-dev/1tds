import Boom from '@hapi/boom';
import { compose } from 'ramda';
import withError from '../../../../middlewares/withError';
import withAuth from '../../../../middlewares/withAuth';
import cms, { MODAL } from '../../../../lib/cms';
import withUser from '../../../../middlewares/withUser';

const createCaptain = async (req, res) => {
  const { name } = req.body;

  const { user } = req;

  if (!name) {
    throw Boom.badRequest();
  }

  const itemType = await cms.fullAccess.itemTypes.find(MODAL.captain);
  const record = await cms.fullAccess.items.create({
    itemType: itemType.id,
    name,
    user_id: user.id,
    products: [],
  });

  res.status(200).json(record);
};
export default compose(
  withUser,
  withError,
  withAuth,
)(createCaptain);
