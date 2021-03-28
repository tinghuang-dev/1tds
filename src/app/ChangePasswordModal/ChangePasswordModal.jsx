import React, { useState } from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import useMessage from '../../hooks/useMessage/useMessage';
import Box from '../../components/Box';
import config from './formConfig';
import useForm from '../../hooks/useForm';
import useApi from '../../hooks/useApi';
import changePassword from '../../apis/users/changePassword';
import MessageBox from '../../components/MessageBox';

export default function ChangePasswordModal({ userId, onClose }) {
  const [httpRequestStatus, setHttpRequestStatus] = useState();
  const message = useMessage();

  const onSuccess = () => {
    onClose();
    message.success('密码修改成功！');
  };

  const onFail = (error) => {
    setHttpRequestStatus(error.status);
  };

  const {
    requesting,
    sendRequest,
  } = useApi((data) => changePassword(userId, data), { onSuccess, onFail });

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, sendRequest);

  return (
    <Modal title="修改密码" onClose={onClose} size="sm">
      {httpRequestStatus && (
        <Box mb="md">
          <MessageBox variant={(httpRequestStatus !== 201) && 'error'}>
            {{
              412: '您输入的当前密码错误, 请重新输入',
            }[httpRequestStatus]}
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
            <Button loading={requesting} size="md" variant="primary" mt="md" type="submit">确定</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
