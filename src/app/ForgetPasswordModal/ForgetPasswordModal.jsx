import React, { useState } from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';
import Modal from '../../components/Modal';
import useForm from '../../hooks/useForm';
import config from './formConfig';
import forgetPassword from '../../apis/auth/forgetPassword';
import HintMessage from '../../components/HintMessage';
import getFormSubmitting from '../../utils/getFormSubmitting';

export default function ForgetPasswordModal({ onClose }) {
  const [response, setResponse] = useState();

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    error,
  } = useForm(config, (data) => {
    setResponse();

    forgetPassword(data)
      .then(setResponse)
      .catch(setResponse);
  });

  return (
    <Modal size="sm" title="忘记密码?" onClose={onClose}>
      <Box mb="md">
        <MessageBox variant={(response?.status !== 201) && 'info'}>
          {{
            201: '一封包含重置密码链接的邮件已发送至您的邮箱，请注意查收。',
          }[response?.status] || '请输入您的登陆邮箱。若该邮箱已注册，您会收到一份包含重设密码链接的电子邮件。'}
        </MessageBox>
      </Box>
      <form onSubmit={handleSubmit}>
        {Object.keys(config).map((key) => {
          const errorMessage = config[key].getErrorMessage?.(
            values[key],
            values,
          );
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
        <Box textAlign="center" mt="lg">
          <Button
            loading={getFormSubmitting(response, { touched, error })}
            type="submit"
          >
            确定
          </Button>
        </Box>
        {response?.status === 201 && (
          <Box>
            <HintMessage />
            <Box textAlign="center" mt="lg" color="#4F4F4F">*生成的链接尽在24小时内有效</Box>
          </Box>
        )}
      </form>
    </Modal>
  );
}
