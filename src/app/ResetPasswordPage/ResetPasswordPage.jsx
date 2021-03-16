import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ModalPage from '../../components/ModalPage';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Box from '../../components/Box';
import resetPassword from '../../apis/auth/resetPassword';
import config from './formConfig';
import useForm from '../../hooks/useForm';

const ConfirmButton = styled(Button)`
  margin-top: 32px;
`;

export default function ResetPasswordPage() {
  const {
    validate, handleChange, values, touched, toggleTouched,
  } = useForm(config);

  const [submitting, setSubmitting] = useState(false);

  const { query: { token }, push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    toggleTouched(true);

    if (validate()) {
      setSubmitting(true);

      try {
        await resetPassword(values.password, token);
        push('/');
      } catch (error) {
        setSubmitting(false);
      }
      setSubmitting(false);
    }
  };

  return (
    <ModalPage title="重置密码">
      <Box mt="md">您正在进行重制密码操作，请输入新密码。</Box>
      <Box py="lg">
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
            <ConfirmButton size="md" variant="primary" loading={submitting} type="submit">确定</ConfirmButton>
          </Box>
        </form>
      </Box>
    </ModalPage>
  );
}
