import React, { useState } from 'react';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Heading from '../../../../components/Heading';
import Button from '../../../../components/Button';
import DeleteInvitationConfirmModal from './components/DeleteInvitationConfirmModal';
import ResendInvitation from './components/ResendInvitation/ResendInvitation';
import Text from '../../../../components/Text';
import TruncateText from '../../../../components/TruncateText';

const PendingMemberInfo = ({ invitations, userId, onInvitationDelete }) => {
  const [pendingDeleteId, setPendingDeleteId] = useState();

  const pendingMembers = invitations?.filter((x) => x.invitedUserId === null);

  return (
    <>
      <Box my="lg">
        <Box pb="md" borderBottom="@1">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="sm">待验证</Heading>
          </Flex>
        </Box>
        <Box px="sm" mt="md">
          {pendingMembers?.map((member) => (
            <Box py="xs" key={member.id}>
              <Flex
                pl={['sm', null, 'md']}
                py="sm"
                bg="grey"
                flex="1"
                justifyContent="space-between"
                borderRadius="default"
              >
                <Box width={['180px', null, 'initial']}>
                  <TruncateText>
                    <Text fontSize={['sm', null, 'md']}>
                      {member.email}
                    </Text>
                  </TruncateText>
                </Box>
                <Flex>
                  <ResendInvitation
                    userId={userId}
                    member={member}
                  />
                  <Box color="greys.@400" px="sm">
                    <Button
                      size="sm"
                      variant="naked"
                      onClick={() => setPendingDeleteId(member.id)}
                    >
                      删除
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
      {pendingDeleteId && (
        <DeleteInvitationConfirmModal
          onClose={() => setPendingDeleteId(false)}
          invitationId={pendingDeleteId}
          userId={userId}
          onSuccess={() => onInvitationDelete(pendingDeleteId)}
        />
      )}
    </>
  );
};

export default PendingMemberInfo;
