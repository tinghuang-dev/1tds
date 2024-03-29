import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Heading from '../../../../components/Heading';
import ChangePasswordModal from '../../../ChangePasswordModal';

export default function PersonalInfo({ userInfo }) {
  const [changePassword, setChangePassword] = useState(false);

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
            <Input variants="md" readOnly value={userInfo.email} />
          </FormItem>
        </Box>
      </Box>
      {changePassword && (
        <ChangePasswordModal userId={userInfo.id} onClose={() => setChangePassword(false)} />
      )}
    </>
  );
}
