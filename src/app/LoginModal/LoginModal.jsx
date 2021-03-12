import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import useForm from '../../hooks/useForm';
import config from './formConfig';
import FormItem from '../../components/FormItem';
import MessageBox from '../../components/MessageBox';
import login from '../../apis/auth/login';

const Form = styled.form`
  margin: 0 auto;
`;

const StyledMessageBox = styled(MessageBox)`
  margin-bottom: 10px;
`;

const LoginButton = styled(Button)`
  display: block;
  margin: 50px auto 28px;
`;

export default function LoginModal({
  onClose,
  onForgetPassword,
  onNotVerifiedEmail,
}) {
  const {
    validate, handleChange, values, touched, toggleTouched,
  } = useForm(config);

  const [submitting, setSubmitting] = useState(false);

  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    toggleTouched(true);

    if (validate()) {
      setSubmitting(true);

      try {
        await login(values);

        router.push('/user/profile');
        onClose();
      } catch ({ status }) {
        if (status === 412) {
          onNotVerifiedEmail(values.email);

          return;
        }

        setHttpRequestStatus(status);

        setSubmitting(false);
      }
    }
  };

  return (
    <Modal title="登陆" onClose={onClose} size="sm">
      {httpRequestStatus && (
        <StyledMessageBox variant={(httpRequestStatus !== 201) && 'error'}>
          {{
            404: '邮箱与密码不匹配, 请重试',
          }[httpRequestStatus] || '登录失败，请稍后再试'}
        </StyledMessageBox>
      )}

      <Form onSubmit={handleSubmit}>
        {Object.keys(config).map((key) => {
          const errorMessage = config[key].getErrorMessage?.(values[key], values);
          const error = touched && !!errorMessage;

          return (
            <FormItem
              key={key}
              name={key}
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

        <Button variant="link" type="button" onClick={onForgetPassword}>
          忘记密码？
        </Button>

        <LoginButton loading={submitting} type="submit">
          登录
        </LoginButton>
      </Form>
    </Modal>
  );
}
