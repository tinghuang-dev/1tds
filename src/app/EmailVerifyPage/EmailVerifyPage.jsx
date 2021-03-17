import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';
import Link from '../../components/Link';
import verifyEmail from '../../apis/auth/verifyEmail';
import LoadingState from './components/LoadingState';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Title from '../../components/Title';
import ModalPage from '../../components/ModalPage';

const EmailVerifyPage = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);
  const { query: { token } } = useRouter();
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  useEffect(() => {
    if (token) {
      const verifyUserEmail = async () => {
        try {
          const { status } = await verifyEmail(token);
          setHttpRequestStatus(status);
        } catch (error) {
          setHttpRequestStatus(error.status);
        }
      };
      verifyUserEmail();
    }
  }, [token]);

  const verified = httpRequestStatus === 201;

  return !httpRequestStatus ? (
    <LoadingState />
  ) : (
    <>
      <Title>激活账号</Title>
      <ModalPage title={verified ? '激活账号成功' : '激活账号失败'}>
        <Box my="lg" color="#4F4F4F">
          {verified ? '您的帐号已成功激活。' : '您的激活账号链接已失效，请尝试重新登录获取新的验证链接。'}
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
    </>
  );
};
export default EmailVerifyPage;
