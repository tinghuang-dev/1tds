import validator from 'validator';
import getMessage from '../../utils/getMessage';

const config = (initialValue) => ({
  email: {
    label: '邮箱',
    initialValue: initialValue.email,
  },
  mobile: {
    label: '手机',
    inputType: 'number',
    getErrorMessage: (mobile) => getMessage([
      {
        error: !mobile,
        message: '请填写手机',
      },
      {
        error: !validator.isMobilePhone(mobile, 'en-AU'),
        message: '手机号码格式不正确',
      },
    ]),
  },
  address: {
    label: '地址',
    getErrorMessage: (address) => getMessage([{
      error: !address,
      message: '请填写地址',
    }]),
  },
  password: {
    label: '密码',
    inputType: 'password',
    getErrorMessage: (password) => getMessage([
      {
        error: !password,
        message: '请填写密码',
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
        message: '请填写确认密码',
      },
      {
        error: confirmPassword !== formValues.password,
        message: '两次密码输入不一致',
      },
    ]),
  },
});
export default config;
