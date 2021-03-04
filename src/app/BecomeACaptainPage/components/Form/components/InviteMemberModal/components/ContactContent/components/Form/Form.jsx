import React from 'react';
import styled from 'styled-components';
import config from './config';
import useForm from '../../../../../../../../../../hooks/useForm';
import Input from '../../../../../../../../../../components/Input';
import Button from '../../../../../../../../../../components/Button';
import FormItem from '../../../../../../../../../../components/FormItem';

const StyledForm = styled.form`
  margin: 36px 0 0;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const SubmitButton = styled(Button)`
  margin-left: 16px;
`;

const KEY = 'contact';

export default function Form({
  contacts,
  onSubmit,
}) {
  const {
    validate,
    handleChange,
    values,
    touched,
    toggleTouched,
  } = useForm(config);

  const isExistingContact = !!contacts.find((contact) => contact === values.contact);

  const errorMessage = config[KEY].getErrorMessage?.(values[KEY], values)
    || (isExistingContact && '请勿输入重复信息');
  const error = touched && !!errorMessage;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate() || isExistingContact) {
      toggleTouched();

      return;
    }

    onSubmit(values[KEY]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem
        key={KEY}
        layout="block"
        label={config[KEY].label}
        errorMessage={error && errorMessage}
      >
        <InputWrapper>
          <Input
            type={config[KEY].inputType || 'text'}
            name={KEY}
            onChange={handleChange(KEY)}
            value={values[KEY]}
            error={error}
          />
          <SubmitButton color="success">确认</SubmitButton>
        </InputWrapper>
      </FormItem>
    </StyledForm>
  );
}
