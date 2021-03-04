import alertEmpty from '../../utils/alertEmpty';
import getMessage from '../../utils/getMessage';

const config = {
  email: {
    label: '邮箱',
    getErrorMessage: (email) => getMessage([
      {
        error: !email,
        message: alertEmpty(config.email.label),
      },
    ]),
  },
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
};

export default config;
