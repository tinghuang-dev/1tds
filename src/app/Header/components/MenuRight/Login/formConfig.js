import validator from 'validator';

function alertEmpty(label) {
  return `请填写${label}`;
}

const config = {
  email: {
    label: '邮箱',
    getErrorMessage: (email) => (!email && alertEmpty(config.email.label))
      || (!validator.isEmail(email) && '邮箱格式不正确'),
  },
  password: {
    label: '密码',
    inputType: 'password',
    getErrorMessage: (password) => !password && alertEmpty(config.password.label),
  },
};

export default config;
