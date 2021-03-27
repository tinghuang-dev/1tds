import React from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Box from '../../components/Box';
import config from './formConfig';
import useForm from '../../hooks/useForm';
import useMessage from '../../hooks/useMessage/useMessage';

export default function ChangePasswordModal({ onClose }) {
  const {
    handleChange,
    values,
    touched,
  } = useForm(config);

  const message = useMessage();

  const handleSubmit = (event) => {
    event.preventDefault();

    message.success('密码修改成功！');
  };

  return (
    <Modal title="修改密码" onClose={onClose} size="sm">
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
            <Button size="md" variant="primary" mt="md" type="submit">确定</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
