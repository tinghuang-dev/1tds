import { compose } from 'ramda';
import Invitations from '../../../db/models/invitations';
import withUser from '../../../middlewares/withUser';
import withAuth from '../../../middlewares/withAuth';
import withError from '../../../middlewares/withError';

const getInvitations = async (req, res) => {
  const { user } = req;

  const invitations = await Invitations.findAll({
    where: {
      UserId: user.id,
    },
    attributes: ['id', 'email', 'invitedUserId'],
  });

  res.status(200).json({ invitations });
};
export default compose(
  withAuth,
  withUser,
  withError,
)(getInvitations);
