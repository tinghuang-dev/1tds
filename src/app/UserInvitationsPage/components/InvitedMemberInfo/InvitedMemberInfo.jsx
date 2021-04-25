import React from 'react';
import Box from '../../../../components/Box';
import Heading from '../../../../components/Heading';
import Flex from '../../../../components/Flex';
import Text from '../../../../components/Text';

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
            <Flex
              pl={['sm', null, 'md']}
              py="sm"
              bg="grey"
              flex="1"
              justifyContent="space-between"
              borderRadius="default"
            >
              <Text fontSize={['sm', null, 'md']}>
                {member.email}
              </Text>

            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InvitedMemberInfo;
