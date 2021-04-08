import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import useToggler from '../../../../../../hooks/useToggler';
import InviteMemberModal from '../../../../../BecomeACaptainPage/components/Form/components/InviteMemberModal';

const InviteMemberButton = () => {
  const [showInviteMemberModal, toggleShowInviteMemberModal] = useToggler(false);

  return (
    <>
      <Box mr="sm" color="primary">
        <Button variant="naked" onClick={() => toggleShowInviteMemberModal()}>
          邀请团员
        </Button>
      </Box>
      {showInviteMemberModal && (
        <InviteMemberModal onClose={() => toggleShowInviteMemberModal()} />
      )}
    </>
  );
};

export default InviteMemberButton;
