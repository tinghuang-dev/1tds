import React, { useState } from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import useMessage from '../../hooks/useMessage/useMessage';
import Box from '../../components/Box';
import config from './formConfig';
import useForm from '../../hooks/useForm';
import changePassword from '../../apis/users/changePassword';
import MessageBox from '../../components/MessageBox';

export default function ChangePasswordModal({ userId, onClose }) {
  const [response, setResponse] = useState();

  const message = useMessage();

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, (data) => {
    setResponse();

    changePassword(userId, data)
      .then(setResponse)
      .then(() => {
        onClose();
        message.success('密码修改成功！');
      })
      .catch(setResponse);
  });

  return (
    <Modal title="修改密码" onClose={onClose} size="sm">
      {response?.status === 412 && (
        <Box mb="md">
          <MessageBox variant={(response?.status !== 201) && 'error'}>
            您输入的当前密码错误, 请重新输入
          </MessageBox>
        </Box>
      )}

      <Box>
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
                layout="inline"
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
            <Button loading={!response && touched} size="md" variant="primary" mt="md" type="submit">确定</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
