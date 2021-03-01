import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import Modal from '../../../../../components/Modal';
import useForm from '../../../../../hooks/useForm';
import config from './formConfig';
import FormItem from '../../../../../components/FormItem';

const Form = styled.form`
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  display: block;
  margin: 50px auto 28px;
`;

export default function Login({ onClose }) {
  const {
    validate, handleChange, values, touched, toggleTouched,
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
            <FormItem
              key={key}
              layout="block"
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
        <Button variant="naked">忘记密码？</Button>
        <LoginButton type="submit">登录</LoginButton>
      </Form>
    </Modal>
  );
}
