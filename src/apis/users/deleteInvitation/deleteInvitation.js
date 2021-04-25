import axios from '../../../lib/axios';

const deleteInvitation = ({ userId, invitationId }) => axios
  .delete(`/users/${userId}/invitations/${invitationId}`)
  .catch((error) => { throw error.response; });

export default deleteInvitation;
