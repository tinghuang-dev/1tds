import styled from 'styled-components';
import React, { Fragment } from 'react';
import useForm from '../../../../../hooks/useForm/useForm';
import config from './formConfig';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 0;
  top: 0;
`;

const Modal = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  height: auto;
`;

const ModalContent = styled.div`
  position: relative;
  padding: 64px 0px 60px 0px;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  font-size: 24px;
  border: 3px solid #c97a40;
  color: #c97a40;
  border-radius: 5px;
  right: 50px;
  top: 32px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: 'ZCOOL KuaiLe';
  font-size: 36px;
  width:100px;
  margin: 0px 200px 52px 200px;
  font-weight: 400;
  text-align: center;
`;

const Form = styled.form`
  width: 325px;
  margin: 0 auto;
`;

const LabelText = styled.div`
  margin: 8px 0px 8px 0px;
`;

const Label = styled.label`
  font-size: 18px;
  width: 330px;
`;

const LoginInput = styled.div`
  margin-bottom: 28px;
`;

const ForgetPwd = styled.span`
  font-size: 18px;
  color: #6097e6;
`;

const LoginButton = styled(Button)`
  width:95px;
  margin: 50px auto 28px auto;
`;

const ErrorMessage = styled.p`
  color: #e83d32;
  margin: 2px 0 8px;
`;

export default function Login({ onClose }) {
  const {
    validate,
    handleChange,
    values,
    touched,
    toggleTouched,
  } = useForm(config);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      toggleTouched();
    }
  };

  return (
    <Overlay>
      <Modal>
        <ModalContent>
          <CloseButton type="button" onClick={onClose}>
            &times;
          </CloseButton>

          <div>
            <Title>登录</Title>
          </div>
          <Form onSubmit={handleSubmit}>
            {Object.keys(config).map((key) => {
              const errorMessage = config[key].getErrorMessage?.(values[key], values);
              const error = touched && !!errorMessage;
              return (
                <Fragment key={key}>
                  <LabelText>
                    <Label htmlFor={key}>{config[key].label}</Label>
                  </LabelText>
                  <LoginInput>
                    <Input
                      type={config[key].inputType || 'text'}
                      name={key}
                      onChange={handleChange(key)}
                      value={values[key]}
                      error={error}
                    />
                    {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                  </LoginInput>
                </Fragment>
              );
            })}
            <ForgetPwd>忘记密码？</ForgetPwd>
            <LoginButton type="submit">登录</LoginButton>
          </Form>
        </ModalContent>
      </Modal>
    </Overlay>
  );
}
