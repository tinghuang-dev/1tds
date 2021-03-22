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
import ForgetPasswordModal from '../ForgetPasswordModal';
import UserAuthModals from '../UserAuthModals';

const MODAL = {
  FORGET_PASSWORD: 'FORGET_PASSWORD',
  USER_AUTH_MODAL: 'USER_AUTH_MODAL',
};

export default function ResetPasswordPage() {
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const [modal, setModal] = useState();

  const router = useRouter();
  const { token } = router.query;

  const onSubmit = async (values) => {
    const { status } = await resetPassword({
      password: values.password,
      token,
    });

    setHttpRequestStatus(status);
  };

  const onSubmitFail = (error) => {
    if (error) {
      setHttpRequestStatus(error.status);
    }
  };

  const {
    handleChange,
    values,
    touched,
    submitting,
    handleSubmit,
  } = useForm(config, onSubmit, onSubmitFail);

  return (
    <ModalPage title="重置密码">
      <Box mt="lg">
        {httpRequestStatus ? (
          <>
            {{
              201: (
                <MessageBox variant="success">
                  重置密码成功，
                  <Button variant="naked" onClick={() => setModal(MODAL.USER_AUTH_MODAL)}>点击重新登录</Button>
                </MessageBox>
              ),
              404: (
                <MessageBox variant="error">
                  重置密码失败，
                  <Button variant="link" type="button" onClick={() => setModal(MODAL.FORGET_PASSWORD)}>
                    请再次申请重置密码
                  </Button>
                </MessageBox>
              ),
            }[httpRequestStatus]}
          </>
        ) : '请输入新密码'}
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
      {{
        [MODAL.FORGET_PASSWORD]: (
          <ForgetPasswordModal
            onClose={() => setModal()}
          />
        ),
        [MODAL.USER_AUTH_MODAL]: (
          <UserAuthModals
            onClose={() => setModal()}
          />
        ),
      }[modal]}
    </ModalPage>
  );
}
