import { compose } from 'ramda';
import Invitations from '../../../../db/models/invitations';
import mail from '../../../../lib/mail';
import withError from '../../../../middlewares/withError';
import withUser from '../../../../middlewares/withUser';
import withAuth from '../../../../middlewares/withAuth';

const resendInvitation = async (req, res) => {
  const { invitationId } = req.query;

  const invitation = await Invitations.findByPk(invitationId);

  const { email, token } = invitation;

  await mail.sendInviteMember(email, token);

  res.status(201).end();
};

export default compose(
  withError,
  withAuth,
  withUser,
)(resendInvitation);
