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

export default function ForgetPasswordModal({ onClose }) {
  const {
    validate, handleChange, values, touched, toggleTouched,
  } = useForm(config);

  const [submitting, setSubmitting] = useState(false);

  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    toggleTouched(true);

    if (validate()) {
      setSubmitting(true);

      try {
        const { status } = await forgetPassword(values);
        setHttpRequestStatus(status);
      } catch (error) {
        setHttpRequestStatus(error.status);
        setSubmitting(false);
      }
      setSubmitting(false);
    }
  };

  return (
    <Modal title="忘记密码？" onClose={onClose} size="sm">
      <Box mb="md">
        <MessageBox variant="info">
          {{
            201: '一封包含重置密码链接的邮件已发送至您的邮箱，请注意查收。',
          }[httpRequestStatus] || '请输入您的登陆邮箱，您会收到一份包含重设密码链接的电子邮件。'}
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
          <Button loading={submitting} type="submit">确定</Button>
        </Box>
      </form>
    </Modal>
  );
}
