import React, { useState } from 'react';
import Router from 'next/router';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import getFormSubmitting from '../../../../utils/getFormSubmitting';
import PendingEmailConfirmationModal from '../../../PendingEmailConfirmationModal';
import config from '../../formConfig';
import useForm from '../../../../hooks/useForm';
import signUp from '../../../../apis/auth/signUp';

const MODAL = {
  PENDING_EMAIL_CONFIRMATION: 'PENDING_EMAIL_CONFIRMATION',
};

function Form(email) {
  const [modal, setModal] = useState();

  const [response, setResponse] = useState();

  const configuration = config(email);

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    error,
  } = useForm(configuration, (data) => {
    setResponse();

    signUp(data)
      .then(setResponse)
      .then(() => setModal(MODAL.PENDING_EMAIL_CONFIRMATION))
      .catch(setResponse);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(configuration).map((key) => {
          const errorMessage = configuration[key].getErrorMessage?.(
            values[key],
            values,
          );
          return (
            <FormItem
              key={key}
              name={key}
              layout="flex"
              label={configuration[key].label}
              errorMessage={error && errorMessage}
            >
              <Input
                type={configuration[key].inputType || 'text'}
                name={key}
                onChange={handleChange(key)}
                value={values[key]}
                error={error}
                readOnly={key === 'email'}
              />
            </FormItem>
          );
        })}
        <Box textAlign="center" mt="1x">
          <Button
            size="md"
            variant="primary"
            mt="md"
            type="submit"
            loading={getFormSubmitting(response, { touched, error })}
          >
            激活
          </Button>
        </Box>
      </form>

      {modal === MODAL.PENDING_EMAIL_CONFIRMATION && (
        <PendingEmailConfirmationModal
          email={values.email}
          onClose={() => {
            setModal();
            Router.push('/');
          }}
        />
      )}
    </>
  );
}

export default Form;
