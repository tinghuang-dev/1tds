import React, { useState } from 'react';
import LoginModal from '../LoginModal';
import ForgetPasswordModal from '../ForgetPasswordModal';
import NotVerifiedEmailModal from '../NotVerifiedEmailModal';

const MODAL = {
  LOGIN: 'LOGIN',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
  NOT_VERIFIED_EMAIL: ' NOT_VERIFIED_EMAIL',
};

export default function UserAuthModals({
  onClose,
}) {
  const [modal, setModal] = useState(MODAL.LOGIN);

  const [email, setEmail] = useState();

  const handleNotVerifiedEmail = (inputEmail) => {
    setEmail(inputEmail);

    setModal(MODAL.NOT_VERIFIED_EMAIL);
  };

  return {
    [MODAL.LOGIN]: (
      <LoginModal
        onClose={onClose}
        onForgetPassword={() => setModal(MODAL.FORGET_PASSWORD)}
        onNotVerifiedEmail={handleNotVerifiedEmail}
      />
    ),
    [MODAL.FORGET_PASSWORD]: (
      <ForgetPasswordModal
        onClose={onClose}
      />
    ),
    [MODAL.NOT_VERIFIED_EMAIL]: (
      <NotVerifiedEmailModal
        onClose={onClose}
        email={email}
      />
    ),
  }[modal];
}
