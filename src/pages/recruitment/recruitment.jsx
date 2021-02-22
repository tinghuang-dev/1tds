import React, { Fragment } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import config from './formConfig';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const Input = styled.input`
  margin-left: 10px;
  outline: none;

  border-color: ${(props) => props.error && 'red'}
`;

const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export default function RecruitmentPage() {
  const {
    validateInput,
    handleInputChange,
    getValues,
    touched,
    toggleTouched,
  } = useForm(config);

  const formValues = getValues();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInput()) {
      toggleTouched();
    }
  };

  return (
    <FormWrapper>
      <h1>
        成为团长
      </h1>

      <form onSubmit={handleSubmit}>
        {Object.keys(config).map((key) => (
          <Fragment key={key}>
            <InputWrapper>
              <label htmlFor={key}>
                {config[key].label}
              </label>
              <Input
                type={config[key].inputType || 'text'}
                name={key}
                onChange={handleInputChange(key)}
                value={formValues[key]}
                error={touched && (
                  !!config[key].isInValid?.(formValues[key], formValues))}
              />
            </InputWrapper>

            {touched && (
              <ErrorMessage>
                {config[key].isInValid?.(formValues[key], formValues)}
              </ErrorMessage>
            )}
          </Fragment>
        ))}

        <SubmitButton type="submit">
          注册
        </SubmitButton>
      </form>
    </FormWrapper>
  );
}
