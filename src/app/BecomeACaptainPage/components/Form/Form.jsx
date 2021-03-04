import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import useToggler from '../../../../hooks/useToggler';
import InviteMemberModal from './components/InviteMemberModal';
import config from './config';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';
import signUp from '../../../../apis/auth/signUp';

const StyledForm = styled.form`
  padding: 0 48px;
`;

const CallToAction = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const MessageBox = styled.div`
  width: 100%;
  background-color: #EB9050;
  color: white;
  border-radius: 4px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 24px;
`;

export default function Form() {
  const [showInviteMemberModal, toggleShowInviteMemberModal] = useToggler(false);
  const [serverError, setServerError] = useState();

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
    toggleTouched(true);

    if (!validate()) {
      return;
    }

    try {
      await signUp(values);
      toggleShowInviteMemberModal();
    } catch (error) {
      setServerError(error);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {serverError && (
          <MessageBox>
            {{
              409: '该邮箱已被使用，请尝试其他邮箱，或前往“找回密码”',
            }[serverError.status]}
          </MessageBox>
        )}
        {Object.keys(config).map((key) => {
          const errorMessage = config[key].getErrorMessage?.(values[key], values);
          const error = touched && !!errorMessage;

          return (
            <FormItem
              key={key}
              layout="inline"
              label={config[key].label}
              errorMessage={error && errorMessage}
            >
              <Input
                type={config[key].inputType || 'text'}
                name={key}
                onChange={handleChange(key)}
                value={values[key]}
                error={error}
              />
            </FormItem>
          );
        })}
        <CallToAction>
          <Button size="lg" type="submit">成为团长</Button>
        </CallToAction>
      </StyledForm>
      {showInviteMemberModal && (
        <InviteMemberModal
          onClose={() => toggleShowInviteMemberModal()}
        />
      )}
    </>
  );
}
