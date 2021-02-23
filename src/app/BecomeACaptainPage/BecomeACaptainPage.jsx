import React, { Fragment } from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import config from './formConfig';
import Button from '../../components/Button';
import Input from '../../components/Input';

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 612px;
  right: 50%;
  background: #FCEAC6;
  padding: 40px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 24px;
`;

const FormInput = styled(Input)`
  margin-left: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled(Button)`
  padding: 16px 24px;
  margin-top: 64px;
  font-size: 24px;
  width: 149px;
  height: 52px;
`;

const FormRow = styled.div`
  height: auto;
  background-color: lightblue;
  height: 915px;
`;

const Form = styled.form`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 83.5px;
`;

const Title = styled.h1`
  font-family: 'ZCOOL KuaiLe';
  font-size: 72px;
  margin: 30px 0;
  font-weight: 400;
`;

const Introduction = styled.div`
  padding: 0 50px;
  margin: 20px 0;
`;

export default function BecomeACaptainPage() {
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
    <FormRow>
      <FormArea>
        <Title>
          团购主理人
        </Title>

        <Introduction>
          罗列一些介绍。。。。Lorem ipsum dolor sit amet, consec adip g elit.
          Amet mattis id rpis vel auctor diam. Amet orci
        </Introduction>

        <Form onSubmit={handleSubmit}>
          {Object.keys(config).map((key) => (
            <Fragment key={key}>
              <InputWrapper>
                <label htmlFor={key}>
                  {config[key].label}
                </label>
                <FormInput
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
            成为团长
          </SubmitButton>
        </Form>
      </FormArea>
    </FormRow>
  );
}
