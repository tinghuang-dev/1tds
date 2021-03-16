import alertEmpty from '../../utils/alertEmpty';
import getMessage from '../../utils/getMessage';

const config = {
  password: {
    label: '密码',
    inputType: 'password',
    getErrorMessage: (password) => getMessage([
      {
        error: !password,
        message: alertEmpty(config.password.label),
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
        message: '输入密码不符',
      },
    ]),
  },
};

export default config;
