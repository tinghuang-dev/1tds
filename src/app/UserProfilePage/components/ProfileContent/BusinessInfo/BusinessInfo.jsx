import React from 'react';
import Box from '../../../../../components/Box';
import Flex from '../../../../../components/Flex';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Heading from '../../../../../components/Heading';

const BusinessInfo = ({ user }) => (
  <Box my="md">
    <Box pb="md" borderBottom="@1">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="sm">经营信息</Heading>
        <Button size="sm" type="submit" variant="primary">
          修改信息
        </Button>
      </Flex>
    </Box>

    <Box px="sm">
      <FormItem label="手机">
        <Input
          variants="md"
          readOnly
          value={user.mobile}
        />
      </FormItem>
      <FormItem label="地址">
        <Input
          variants="md"
          readOnly
          value={user.address}
        />
      </FormItem>
    </Box>
  </Box>
);
export default BusinessInfo;
