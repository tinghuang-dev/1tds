import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';
import Link from '../../components/Link';

const PageContainer = styled(Container)`
  position: relative;
  margin-top: 100px;
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

const EmailVerifySuccessPage = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);

  return (
    <PageContainer>
      <StyledHeading size="xl">邮箱验证成功</StyledHeading>
      <ButtonWrapper>
        <Link href="/">
          <Button color="secondary">前往首页</Button>
        </Link>
        <RightButton onClick={() => toggleShowUserAuthModals()}>登陆</RightButton>
      </ButtonWrapper>
      {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
    </PageContainer>
  );
};
export default EmailVerifySuccessPage;
