import { compose } from 'ramda';
import Invitations from '../../../../db/models/invitations';
import withError from '../../../../middlewares/withError';
import withUser from '../../../../middlewares/withUser';
import withAuth from '../../../../middlewares/withAuth';

const deleteInvitation = async (req, res) => {
  const { invitationId } = req.query;

  await Invitations.destroy({ where: { id: invitationId } });

  res.status(201).end();
};

export default compose(
  withError,
  withAuth,
  withUser,
)(deleteInvitation);
