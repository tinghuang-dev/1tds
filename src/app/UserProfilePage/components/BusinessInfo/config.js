import validator from 'validator';
import getMessage from '../../../../utils/getMessage';

const config = (initialValue) => ({
  mobile: {
    label: '手机',
    inputType: 'number',
    initialValue: initialValue.mobile.toString(),
    getErrorMessage: (mobile) => getMessage([
      {
        error: !mobile,
        message: '手机号码不能为空',
      },
      {
        error: !validator.isMobilePhone(mobile, 'en-AU'),
        message: '手机号码格式不正确',
      },
    ]),
  },
  address: {
    label: '地址',
    initialValue: initialValue.address,
    getErrorMessage: (address) => getMessage([{
      error: !address,
      message: '地址不能为空',
    }]),
  },
});

export default config;
