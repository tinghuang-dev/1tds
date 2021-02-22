import validator from 'validator';

function alertEmpty(label) {
  return `请填写${label}`;
}

const config = {
  name: {
    label: '姓名',
    isInValid: (name) => (
      !name && alertEmpty(config.name.label)),
  },
  mobile: {
    label: '手机',
    inputType: 'number',
    isInValid: (mobile) => (
      (!mobile && alertEmpty(config.mobile.label))
      || (!validator.isMobilePhone(mobile, 'en-AU') && '手机号码格式不正确')),
  },
  email: {
    label: '邮箱',
    isInValid: (email) => (
      (!email && alertEmpty(config.email.label))
      || (!validator.isEmail(email) && '邮箱格式不正确')),
  },
  address: {
    label: '地址',
    isInValid: (address) => (
      !address && alertEmpty(config.address.label)),
  },
  password: {
    label: '密码',
    inputType: 'password',
    isInValid: (password) => (
      !password && alertEmpty(config.password.label)),
  },
  confirmPassword: {
    label: '确认密码',
    inputType: 'password',
    isInValid: (confirmPassword, formValues) => (
      (!confirmPassword && alertEmpty(config.confirmPassword.label))
      || (confirmPassword !== formValues.password && '邮箱格式不正确')),
  },
};

export default config;
