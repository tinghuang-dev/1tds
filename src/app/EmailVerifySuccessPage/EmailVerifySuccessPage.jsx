import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';
import Link from '../../components/Link';
import verifyEmail from '../../apis/auth/verifyEmail';
import LoadingState from './components/LoadingState';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Title from '../../components/Title';

const EmailVerifySuccessPage = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);
  const [loading, setLoading] = useState(true);
  const { query: { token } } = useRouter();

  useEffect(() => {
    if (token) {
      const verifyUserEmail = async () => {
        try {
          await verifyEmail(token);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        setLoading(false);
      };
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <Title>邮箱验证成功</Title>
      <Box mt="3x">
        {loading ? (<LoadingState />) : (
          <Container>
            <Box textAlign="center" py="lg">
              <Heading size="1x">邮箱验证成功</Heading>
            </Box>
            <Flex justifyContent="center" py="lg">
              <Link href="/">
                <Button color="secondary">前往首页</Button>
              </Link>
              <Box ml="1x">
                <Button onClick={() => toggleShowUserAuthModals()}>登陆</Button>
              </Box>
            </Flex>
            {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
          </Container>
        )}
      </Box>
    </>
  );
};
export default EmailVerifySuccessPage;
