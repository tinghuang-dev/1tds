import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import useForm from '../../hooks/useForm';
import config from './formConfig';
import FormItem from '../../components/FormItem';
import MessageBox from '../../components/MessageBox';
import login from '../../apis/auth/login';

export default function LoginModal({
  onClose,
  onForgetPassword,
  onNotVerifiedEmail,
}) {
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const router = useRouter();

  const onSubmit = async (values) => {
    await login(values);

    router.push('/user/profile');
    onClose();
  };

  const onSubmitFail = (error, values) => {
    if (error.status === 412) {
      onNotVerifiedEmail(values.email);

      return;
    }
    setHttpRequestStatus(error.status);
  };

  const {
    handleChange,
    values,
    touched,
    submitting,
    handleSubmit,
  } = useForm(config, onSubmit, onSubmitFail);

  return (
    <Modal title="登陆" onClose={onClose} size="sm">
      {httpRequestStatus && (
        <Box mb="md">
          <MessageBox variant={(httpRequestStatus !== 201) && 'error'}>
            {{
              404: '邮箱与密码不匹配, 请重试',
            }[httpRequestStatus] || '登录失败，请稍后再试'}
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
          <Button loading={submitting} type="submit">
            登录
          </Button>
        </Box>
      </form>
    </Modal>
  );
}
