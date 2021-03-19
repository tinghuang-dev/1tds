import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPage from '../../components/ModalPage';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Box from '../../components/Box';
import resetPassword from '../../apis/auth/resetPassword';
import config from './formConfig';
import useForm from '../../hooks/useForm';
import MessageBox from '../../components/MessageBox';
import useToggler from '../../hooks/useToggler';
import UserAuthModals from '../UserAuthModals';

export default function ResetPasswordPage() {
  const {
    validate, handleChange, values, touched, toggleTouched,
  } = useForm(config);

  const [submitting, setSubmitting] = useState(false);

  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);

  const router = useRouter();
  const { token } = router.query;

  const handleSubmit = async (event) => {
    event.preventDefault();

    toggleTouched(true);

    if (validate()) {
      setSubmitting(true);

      try {
        const { status } = await resetPassword({
          password: values.password,
          token,
        });
        setHttpRequestStatus(status);
      } catch (error) {
        setSubmitting(false);
      }
      setSubmitting(false);
    }
  };

  return (
    <ModalPage title="重置密码">
      <Box mt="lg">
        {{
          201: (
            <>
              <MessageBox variant="info">
                重置密码成功，
                <Button variant="naked" onClick={() => toggleShowUserAuthModals()}>点击重新登录</Button>
                {showUserAuthModals && (
                  <UserAuthModals onClose={() => toggleShowUserAuthModals()} />
                )}
              </MessageBox>
            </>
          ),
        }[httpRequestStatus] || '请输入新密码'}
      </Box>
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
            <Button size="md" variant="primary" mt="md" loading={submitting} type="submit">确定</Button>
          </Box>
        </form>
      </Box>
    </ModalPage>
  );
}
