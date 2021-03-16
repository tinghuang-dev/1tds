import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';
import Link from '../../components/Link';
import verifyEmail from '../../apis/auth/verifyEmail';
import Icon from '../../components/Icon';
import Title from '../../components/Title';

const PageContainer = styled(Container)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  padding: 36px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 36px 0px;
`;

const RightButton = styled(Button)`
  margin-left: 62px;
`;

const LoadingIcon = styled(Icon)`
  margin: 0 auto;
`;

const EmailVerifySuccessPage = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);
  const [loading, setloading] = useState(true);
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
        setloading(false);
      };
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <Title>邮箱验证成功</Title>
      <PageContainer>
        {loading ? (<LoadingIcon spin variant="naked" name="loading" size="2x" />) : (
          <>
            <StyledHeading size="xl">邮箱验证成功</StyledHeading>
            <ButtonWrapper>
              <Link href="/">
                <Button color="secondary">前往首页</Button>
              </Link>
              <RightButton onClick={() => toggleShowUserAuthModals()}>登陆</RightButton>
            </ButtonWrapper>
            {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
          </>
        )}
      </PageContainer>
    </>
  );
};
export default EmailVerifySuccessPage;
