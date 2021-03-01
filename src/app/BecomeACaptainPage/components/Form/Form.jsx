import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import useToggler from '../../../../hooks/useToggler';
import InviteMemberModal from './components/InviteMemberModal';
import config from './config';
import Input from '../../../../components/Input';
import FormItem from '../../../../components/FormItem';

const StyledForm = styled.form`
  padding: 0 48px;
`;

const CallToAction = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export default function Form({ onSubmit }) {
  const [showInviteMemberModal, toggleShowInviteMemberModal] = useToggler(true);

  const {
    validate,
    handleChange,
    values,
    touched,
    toggleTouched,
  } = useForm(config);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      toggleTouched();
    } else {
      onSubmit();
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
