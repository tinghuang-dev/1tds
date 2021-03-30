import Router from 'next/router';
import React, { useState } from 'react';
import login from '../../apis/auth/login';
import Box from '../../components/Box';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';
import Modal from '../../components/Modal';
import useForm from '../../hooks/useForm';
import config from './formConfig';

export default function LoginModal({
  onClose,
  onForgetPassword,
  onNotVerifiedEmail,
}) {
  const [response, setResponse] = useState();

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, (data) => {
    setResponse();

    login(data)
      .then(setResponse)
      .then(() => {
        onClose();
        Router.push('/user/profile');
      })
      .catch((error) => {
        if (error.status === 412) {
          onNotVerifiedEmail(values.email);

          return;
        }

        setResponse(error);
      });
  });

  return (
    <Modal title="登陆" onClose={onClose} size="sm">
      {response && (
        <Box mb="md">
          <MessageBox variant={(response.status !== 200) && 'error'}>
            {{
              200: '登陆成功',
              404: '邮箱与密码不匹配，请重试',
            }[response.status] || '登录失败，请稍后再试'}
          </MessageBox>
        </Box>
      )}

      <form onSubmit={handleSubmit}>
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

        <Box textAlign="center" mt="lg">
          <Button loading={!response && touched} type="submit">
            登录
          </Button>
        </Box>
      </form>
    </Modal>
  );
}
