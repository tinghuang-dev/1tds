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
import useApi from '../../hooks/useApi';

export default function ForgetPasswordModal({ onClose }) {
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const onSuccess = ({ status }) => setHttpRequestStatus(status);

  const onFail = (error) => setHttpRequestStatus(error.status);

  const {
    requesting,
    sendRequest,
  } = useApi(forgetPassword, { onSuccess, onFail });

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, sendRequest);

  return (
    <Modal title="忘记密码？" onClose={onClose} size="sm">
      <Box mb="md">
        <MessageBox variant={(httpRequestStatus !== 201) && 'info'}>
          {{
            201: '一封包含重置密码链接的邮件已发送至您的邮箱，请注意查收。',
          }[httpRequestStatus] || '请输入您的登陆邮箱。若该邮箱已注册，您会收到一份包含重设密码链接的电子邮件。'}
        </MessageBox>
      </Box>
      <form onSubmit={handleSubmit}>
        {Object.keys(config).map((key) => {
          const errorMessage = config[key].getErrorMessage?.(
            values[key],
            values,
          );
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
        <Box textAlign="center" mt="lg">
          <Button loading={requesting} type="submit">确定</Button>
        </Box>
      </form>
    </Modal>
  );
}
