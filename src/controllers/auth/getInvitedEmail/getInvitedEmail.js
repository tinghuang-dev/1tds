import Boom from '@hapi/boom';
import { compose } from 'ramda';
import withError from '../../../middlewares/withError';
import Invitations from '../../../db/models/invitations';

const getInvitedEmail = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    throw Boom.badRequest();
  }

  const invitation = await Invitations.findOne({ where: { token } });

  const responseData = {
    email: invitation.email,
    invitedUserId: invitation.invitedUserId,
  };

  if (!responseData.email) {
    throw Boom.notFound();
  }

  res.status(200).json(responseData);
};

export default compose(
  withError,
)(getInvitedEmail);
