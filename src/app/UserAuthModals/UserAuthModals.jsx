import React, { useState } from 'react';
import LoginModal from '../LoginModal';
import ForgetPasswordModal from '../ForgetPasswordModal';

const MODAL = {
  LOGIN: 'LOGIN',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
};

export default function UserAuthModals({
  onClose,
}) {
  const [modal, setModal] = useState(MODAL.LOGIN);

  return {
    [MODAL.LOGIN]: (
      <LoginModal
        onClose={onClose}
        onForgetPassword={() => setModal(MODAL.FORGET_PASSWORD)}
      />
    ),
    [MODAL.FORGET_PASSWORD]: (
      <ForgetPasswordModal
        onClose={onClose}
      />
    ),
  }[modal];
}
