import validator from 'validator';
import alertEmpty from '../../../../utils/alertEmpty';

const config = {
  name: {
    label: '姓名',
    getErrorMessage: (name) => (
      !name && alertEmpty(config.name.label)
    ),
  },
  mobile: {
    label: '手机',
    inputType: 'number',
    getErrorMessage: (mobile) => (
      (!mobile && alertEmpty(config.mobile.label))
      || (!validator.isMobilePhone(mobile, 'en-AU') && '手机号码格式不正确')
    ),
  },
  email: {
    label: '邮箱',
    getErrorMessage: (email) => (
      (!email && alertEmpty(config.email.label))
      || (!validator.isEmail(email) && '邮箱格式不正确')
    ),
  },
  address: {
    label: '地址',
    getErrorMessage: (address) => (
      !address && alertEmpty(config.address.label)
    ),
  },
  password: {
    label: '密码',
    inputType: 'password',
    getErrorMessage: (password) => (
      !password && alertEmpty(config.password.label)
    ),
  },
  confirmPassword: {
    label: '确认密码',
    inputType: 'password',
    getErrorMessage: (confirmPassword, formValues) => (
      (!confirmPassword && alertEmpty(config.confirmPassword.label))
      || (confirmPassword !== formValues.password && '输入密码不符')
    ),
  },
};

export default config;
