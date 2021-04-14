import React from 'react';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Heading from '../../../../components/Heading';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';

const PendingMemberInfo = ({ invitations }) => {
  const pendingMembers = invitations.filter((x) => x.invitedUserId === null);

  return (
    <Box my="lg">
      <Box pb="md" borderBottom="@1">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="sm">待验证</Heading>
        </Flex>
      </Box>
      <Box px="sm" mt="md">
        {pendingMembers.map((member) => (
          <Box py="xs">
            <Flex
              pl="md"
              py="sm"
              bg="grey"
              flex="1"
              justifyContent="space-between"
              borderRadius="default"
            >
              <Flex alignItems="center">
                {member.email}
              </Flex>
              <Flex>
                <Box borderRight="@1" color="greys.@400" px="sm">
                  <Button size="sm" variant="naked">
                    <Text fontFamily="Microsoft YaHei">
                      重新发送
                    </Text>
                  </Button>
                </Box>
                <Box color="greys.@400" px="sm">
                  <Button size="sm" variant="naked">
                    <Text fontFamily="Microsoft YaHei">
                      删除
                    </Text>
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PendingMemberInfo;
