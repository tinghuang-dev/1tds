import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import Modal from '../../../../../components/Modal';
import useForm from '../../../../../hooks/useForm';
import config from './formConfig';

const Form = styled.form`
  margin: 0 auto;
`;

const FormItem = styled.div`
  margin: 12px 0;
`;

const Layout = styled.div`
  display: block;
  align-items: center;
`;

const LabelWrapper = styled.div`
  width: 330px;
`;

const Label = styled.label`
  font-size: 18px;
`;

const LoginButton = styled(Button)`
  display: block;
  margin: 50px auto 28px auto;
`;

const ErrorMessage = styled.div`
  color: #E83D32;
  margin-top: 4px;
`;

export default function Login({ onClose }) {
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
    <Modal title="登陆" onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        {Object.keys(config).map((key) => {
          const errorMessage = config[key].getErrorMessage?.(values[key], values);
          const error = touched && !!errorMessage;
          return (
            <FormItem key={key}>
              <Layout>
                <LabelWrapper>
                  <Label htmlFor={key}>{config[key].label}</Label>
                </LabelWrapper>
                <div>
                  <Input
                    type={config[key].inputType || 'text'}
                    name={key}
                    onChange={handleChange(key)}
                    value={values[key]}
                    error={error}
                  />
                </div>
              </Layout>
              {error && (
                <Layout>
                  <LabelWrapper />
                  <div>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  </div>
                </Layout>
              )}
            </FormItem>
          );
        })}
        <Button variant="naked">忘记密码？</Button>
        <LoginButton type="submit">登录</LoginButton>
      </Form>
    </Modal>
  );
}
