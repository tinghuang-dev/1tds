import React, { useState } from 'react';
import Router from 'next/router';
import signUp from '../../../../apis/auth/signUp';
import Button from '../../../../components/Button';
import FormItem from '../../../../components/FormItem';
import ForgetPasswordModal from '../../../ForgetPasswordModal';
import Input from '../../../../components/Input';
import useForm from '../../../../hooks/useForm';
import InviteMemberModal from './components/InviteMemberModal';
import PendingEmailConfirmationModal from './components/PendingEmailConfirmationModal';
import config from './config';
import MessageBox from '../../../../components/MessageBox';
import Box from '../../../../components/Box';

const MODAL = {
  INVITE_MEMBER: 'INVITE_MEMBER',
  PENDING_EMAIL_CONFIRMATION: 'PENDING_EMAIL_CONFIRMATION',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
};

export default function Form() {
  const [modal, setModal] = useState();

  const [serverError, setServerError] = useState();

  const [submitting, setSubmitting] = useState(false);

  const {
    validate,
    handleChange,
    values,
    touched,
    toggleTouched,
  } = useForm(config);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setServerError();
    setSubmitting(true);
    toggleTouched(true);

    if (!validate()) {
      setSubmitting(false);
      return;
    }

    try {
      await signUp(values);
      setModal(MODAL.INVITE_MEMBER);
    } catch (error) {
      setServerError(error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <Box mx={['sm', null, '1x']}>
        <form onSubmit={handleSubmit}>
          {serverError && (
            <MessageBox mb="md" textAlign="center" variant="error">
              {{
                409: (
                  <>
                    该邮箱已被使用，请尝试其他邮箱。
                    <Button variant="naked" onClick={() => setModal(MODAL.FORGET_PASSWORD)}>
                      或前往找回密码
                    </Button>
                  </>
                ),
              }[serverError.status]}
            </MessageBox>
          )}
          {Object.keys(config).map((key) => {
            const errorMessage = config[key].getErrorMessage?.(values[key], values);
            const error = touched && !!errorMessage;

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
              loading={submitting}
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
