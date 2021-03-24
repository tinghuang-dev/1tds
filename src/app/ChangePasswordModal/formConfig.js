import validator from 'validator';
import alertEmpty from '../../utils/alertEmpty';
import getMessage from '../../utils/getMessage';

const config = {
  oldPassword: {
    label: '旧密码',
    inputType: 'password',
    getErrorMessage: (oldPassword) => getMessage([
      {
        error: !oldPassword,
        message: alertEmpty(config.oldPassword.label),
      },
    ]),
  },
  password: {
    label: '新密码',
    inputType: 'password',
    getErrorMessage: (password, formValues) => getMessage([
      {
        error: !password,
        message: alertEmpty(config.password.label),
      },
      {
        error: password === formValues.oldPassword,
        message: '输入密码不能与旧密码相同',
      },
      {
        error: !validator.isStrongPassword(password, { minUppercase: 0, minSymbols: 0 }),
        message: '至少8个字符，且包含一个字母或数字',
      },
    ]),
  },
  confirmPassword: {
    label: '再次输入',
    inputType: 'password',
    getErrorMessage: (confirmPassword, formValues) => getMessage([
      {
        error: !confirmPassword,
        message: alertEmpty(config.confirmPassword.label),
      },
      {
        error: confirmPassword !== formValues.password,
        message: '输入密码不符',
      },
    ]),
  },
};

export default config;
