import validator from 'validator';
import alertEmpty from '../../utils/alertEmpty';
import getMessage from '../../utils/getMessage';

const config = {
  password: {
    label: '当前密码',
    inputType: 'password',
    getErrorMessage: (password) => getMessage([
      {
        error: !password,
        message: alertEmpty(config.password.label),
      },
    ]),
  },
  newPassword: {
    label: '新密码',
    inputType: 'password',
    getErrorMessage: (newPassword, formValues) => getMessage([
      {
        error: !newPassword,
        message: alertEmpty(config.newPassword.label),
      },
      {
        error: newPassword === formValues.password,
        message: '输入密码不能与旧密码相同',
      },
      {
        error: !validator.isStrongPassword(newPassword, { minUppercase: 0, minSymbols: 0 }),
        message: '至少8个字符，且包含一个字母或数字',
      },
    ]),
  },
  confirmNewPassword: {
    label: '再次输入',
    inputType: 'password',
    getErrorMessage: (confirmNewPassword, formValues) => getMessage([
      {
        error: !confirmNewPassword,
        message: alertEmpty(config.confirmNewPassword.label),
      },
      {
        error: confirmNewPassword !== formValues.newPassword,
        message: '输入密码不符',
      },
    ]),
  },
};

export default config;
