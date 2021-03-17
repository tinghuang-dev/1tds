import validator from 'validator';
import alertEmpty from '../../../../utils/alertEmpty';
import getMessage from '../../../../utils/getMessage';

const config = {
  mobile: {
    label: '手机',
    inputType: 'number',
    getErrorMessage: (mobile) => getMessage([
      {
        error: !mobile,
        message: alertEmpty(config.mobile.label),
      },
      {
        error: !validator.isMobilePhone(mobile, 'en-AU'),
        message: '手机号码格式不正确',
      },
    ]),
  },
  email: {
    label: '邮箱',
    getErrorMessage: (email) => getMessage([
      {
        error: !email,
        message: alertEmpty(config.email.label),
      },
      {
        error: !validator.isEmail(email),
        message: '邮箱格式不正确',
      },
    ]),
  },
  address: {
    label: '地址',
    getErrorMessage: (address) => getMessage([{
      error: !address,
      message: alertEmpty(config.address.label),
    }]),
  },
  password: {
    label: '密码',
    inputType: 'password',
    getErrorMessage: (password) => getMessage([
      {
        error: !password,
        message: alertEmpty(config.password.label),
      },
      {
        error: !validator.isStrongPassword(password, { minUppercase: 0, minSymbols: 0 }),
        message: '至少8个字符，且包含一个字母或数字',
      },
    ]),
  },
  confirmPassword: {
    label: '确认密码',
    inputType: 'password',
    getErrorMessage: (confirmPassword, formValues) => getMessage([
      {
        error: !confirmPassword,
        message: alertEmpty(config.confirmPassword.label),
      },
      {
        error: confirmPassword !== formValues.password,
        message: '两次密码输入不一致',
      },
    ]),
  },
};

export default config;
