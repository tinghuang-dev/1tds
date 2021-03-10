import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import MessageBox from '../../components/MessageBox';
import useForm from '../../hooks/useForm';
import config from './formConfig';

const Form = styled.form`
  margin: 0 auto;
`;

const ConfirmButton = styled(Button)`
  display: block;
  margin: 50px auto 28px;
`;

const StyledMessageBox = styled(MessageBox)`
  margin: 16px 0;
`;

export default function ForgetPasswordModal({ onClose }) {
  const {
    handleChange, values, touched, toggleTouched,
  } = useForm(config);

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleTouched();
  };

  return (
    <Modal title="忘记密码？" onClose={onClose} size="sm">
      <StyledMessageBox variant="info">
        请输入您的登陆邮箱，您会收到一份包含重设密码链接的电子邮件。
      </StyledMessageBox>
      <Form onSubmit={handleSubmit}>
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
        <ConfirmButton type="submit">确定</ConfirmButton>
      </Form>
    </Modal>
  );
}
