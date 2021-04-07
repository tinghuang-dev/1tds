import React from 'react';
import ModalPage from '../../components/ModalPage';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Link from '../../components/Link';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';

const AccountActiveSuccessModal = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);
  return (
    <ModalPage title="账户激活成功">
      <Box my="lg" color="greys.@500">
        您的帐号已成功激活
      </Box>
      <Flex justifyContent="center" py="lg">
        <Link href="/">
          <Button variant="secondary">前往首页</Button>
        </Link>
        <Box ml="1x">
          <Button onClick={() => toggleShowUserAuthModals()}>登陆</Button>
        </Box>
      </Flex>
      {showUserAuthModals && (
        <UserAuthModals onClose={() => toggleShowUserAuthModals()} />
      )}
    </ModalPage>
  );
};

export default AccountActiveSuccessModal;
