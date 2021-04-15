import React from 'react';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Link from '../../../../components/Link';
import ModalPage from '../../../../components/ModalPage';

function MemberActivatedPage() {
  return (
    <ModalPage title="该邮箱已注册">
      <Box mt="lg">
        您已经是一团袋鼠用户，请前往首页或选择登录
      </Box>

      <Flex justifyContent="center" py="lg">
        <Link href="/">
          <Button variant="secondary">前往首页</Button>
        </Link>
        <Box ml="1x">
          <Link href="/login">
            <Button>登陆</Button>
          </Link>
        </Box>
      </Flex>
    </ModalPage>
  );
}

export default MemberActivatedPage;
