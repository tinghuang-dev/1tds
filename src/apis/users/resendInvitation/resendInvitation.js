import axios from '../../../lib/axios';

const resendInvitation = ({ userId, invitationId }) => axios
  .post(`/users/${userId}/invitations/${invitationId}/resend-invitation`)
  .catch((error) => { throw error.response; });

export default resendInvitation;
