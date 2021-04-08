import Boom from '@hapi/boom';
import { compose } from 'ramda';
import withError from '../../../middlewares/withError';
import Invitations from '../../../db/models/invitations';

const getInvitedEmail = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    throw Boom.badRequest();
  }

  const invitation = await Invitations.findOne({ where: token });

  const { email } = invitation.email;

  if (!email) {
    throw Boom.notFound();
  }

  res.status(200).json({ email });
};

export default compose(
  withError,
)(getInvitedEmail);
