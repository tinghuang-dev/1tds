import Boom from '@hapi/boom';
import { compose } from 'ramda';
import Invitations from '../../../db/models/invitations';
import withAuth from '../../../middlewares/withAuth';
import mail from '../../../lib/mail';

const inviteMember = async (req, res) => {
  const { memberEmails } = req.body;

  const { user } = req;

  if (!memberEmails) {
    throw Boom.badRequest();
  }

  const sendInvitations = memberEmails.map(async (email) => {
    const token = await Invitations.createInvitationForUser(
      user.id,
      email,
    );

    await mail.sendInviteMember(email, token);
  });

  await Promise.all(sendInvitations);

  res.status(201).end();
};

export default compose(
  withAuth,
)(inviteMember);
