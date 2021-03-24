import validator from 'validator';
import alertEmpty from '../../utils/alertEmpty';
import getMessage from '../../utils/getMessage';

const config = {
  password: {
    label: '新密码',
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
    label: '再次输入',
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
