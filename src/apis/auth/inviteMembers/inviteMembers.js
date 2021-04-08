import axios from '../../../lib/axios';

const inviteMembers = (memberEmails) => axios
  .post('./auth/invite-members', { memberEmails })
  .catch((error) => { throw error.response; });

export default inviteMembers;
