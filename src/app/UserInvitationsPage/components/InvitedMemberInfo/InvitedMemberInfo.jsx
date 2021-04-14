import React from 'react';
import Box from '../../../../components/Box';
import Heading from '../../../../components/Heading';
import Flex from '../../../../components/Flex';

const InvitedMemberInfo = ({ invitations }) => {
  const invitedMembers = invitations.filter((x) => x.invitedUserId !== null);

  return (
    <Box my="lg">
      <Box pb="md" borderBottom="@1">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="sm">已邀请</Heading>
        </Flex>
      </Box>
      <Box px="sm" mt="md">
        {invitedMembers.map((member) => (
          <Box py="xs">
            <Flex pl="md" py="xs" bg="grey" flex="1">
              {member.email}
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InvitedMemberInfo;
