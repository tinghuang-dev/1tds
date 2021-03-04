import validator from 'validator';
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
      {
        error: !validator.isEmail(email),
        message: '邮箱格式不正确',
      },
    ]),
  },
};

export default config;
