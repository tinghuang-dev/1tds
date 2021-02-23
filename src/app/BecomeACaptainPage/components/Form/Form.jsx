import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import useForm from '../../../../hooks/useForm';
import config from './config';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 48px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0;
`;

const ErrorMessage = styled.div`
  color: #E83D32;
  margin-top: 4px;
  font-size: 16px;
`;

const SubmitButton = styled(Button)`
  margin-top: 24px;
  width: 150px;
`;

const Label = styled.label`
  margin-top: 8px;
  font-size: 18px;
`;

export default function Form() {
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
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {Object.keys(config).map((key) => {
        const errorMessage = config[key].getErrorMessage?.(values[key], values);
        const error = touched && !!errorMessage;

        return (
          <Fragment key={key}>
            <InputWrapper>
              <Label htmlFor={key}>
                {config[key].label}
              </Label>

              <div>
                <Input
                  type={config[key].inputType || 'text'}
                  name={key}
                  onChange={handleChange(key)}
                  value={values[key]}
                  error={error}
                />

                {error && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
              </div>
            </InputWrapper>
          </Fragment>
        );
      })}

      <SubmitButton type="submit" size="lg">成为团长</SubmitButton>
    </StyledForm>
  );
}
