import React, { useState } from 'react';
import Button from '../../../../../components/Button/Button';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
import Box from '../../../../../components/Box';
import Flex from '../../../../../components/Flex';
import Heading from '../../../../../components/Heading';
import ChangePasswordModal from '../../../../ChangePasswordModal';

export default function PersonalInfo({ response }) {
  const [changePassword, setChangePassword] = useState(false);

  const user = response.data;

  return (
    <>
      <Box my="sm">
        <Box pb="md" borderBottom="@1">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="sm">账户信息</Heading>
            <Button size="sm" type="submit" variant="primary" onClick={() => setChangePassword(true)}>
              修改密码
            </Button>
          </Flex>
        </Box>
        <Box px="sm">
          <FormItem label="邮箱">
            <Input variants="md" readOnly value={user.email} />
          </FormItem>
        </Box>
      </Box>
      {changePassword && (
        <ChangePasswordModal userId={user.id} onClose={() => setChangePassword(false)} />
      )}
    </>
  );
}
