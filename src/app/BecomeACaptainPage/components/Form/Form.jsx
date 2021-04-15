import React, { useState } from 'react';
import Router from 'next/router';
import signUp from '../../../../apis/auth/signUp';
import Button from '../../../../components/Button';
import FormItem from '../../../../components/FormItem';
import ForgetPasswordModal from '../../../ForgetPasswordModal';
import Input from '../../../../components/Input';
import useForm from '../../../../hooks/useForm';
import InviteMemberModal from './components/InviteMemberModal';
import PendingEmailConfirmationModal from '../../../PendingEmailConfirmationModal';
import config from './config';
import MessageBox from '../../../../components/MessageBox';
import Box from '../../../../components/Box';
import getFormSubmitting from '../../../../utils/getFormSubmitting';

const MODAL = {
  INVITE_MEMBER: 'INVITE_MEMBER',
  PENDING_EMAIL_CONFIRMATION: 'PENDING_EMAIL_CONFIRMATION',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
};

export default function Form() {
  const [modal, setModal] = useState();

  const [response, setResponse] = useState();

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    error,
  } = useForm(config, (data) => {
    setResponse();

    signUp(data)
      .then(setResponse)
      .then(() => setModal(MODAL.INVITE_MEMBER))
      .catch(setResponse);
  });

  return (
    <>
      <Box mx={['sm', null, '1x']}>
        <form onSubmit={handleSubmit}>
          {response?.status === 409 && (
            <MessageBox mb="md" textAlign="center" variant="error">
              该邮箱已被使用，请尝试其他邮箱。
              <Button variant="naked" onClick={() => setModal(MODAL.FORGET_PASSWORD)}>
                或前往找回密码
              </Button>
            </MessageBox>
          )}
          {Object.keys(config).map((key) => {
            const errorMessage = config[key].getErrorMessage?.(values[key], values);

            return (
              <FormItem
                key={key}
                name={key}
                layout={['block', null, 'flex']}
                label={config[key].label}
                errorMessage={error && errorMessage}
              >
                <Input
                  size={['sm', null, 'md']}
                  type={config[key].inputType || 'text'}
                  name={key}
                  onChange={handleChange(key)}
                  value={values[key]}
                  error={error}
                />
              </FormItem>
            );
          })}
          <Box mt="lg" textAlign="center">
            <Button
              loading={getFormSubmitting(response, { touched, error })}
              type="submit"
            >
              成为团长
            </Button>
          </Box>
        </form>
      </Box>

      {modal === MODAL.INVITE_MEMBER && (
        <InviteMemberModal
          onClose={() => setModal(MODAL.PENDING_EMAIL_CONFIRMATION)}
        />
      )}
      {modal === MODAL.PENDING_EMAIL_CONFIRMATION && (
        <PendingEmailConfirmationModal
          email={values.email}
          onClose={() => {
            setModal();
            Router.push('/');
          }}
        />
      )}
      {modal === MODAL.FORGET_PASSWORD && (
        <ForgetPasswordModal onClose={() => setModal()} />
      )}
    </>
  );
}
