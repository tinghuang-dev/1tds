import validator from 'validator';
import alertEmpty from '../../../../../../../../../../utils/alertEmpty';
import getMessage from '../../../../../../../../../../utils/getMessage';

const config = {
  contact: {
    label: '邮箱/手机',
    getErrorMessage: (contact) => getMessage([
      {
        error: !contact,
        message: alertEmpty('团员联系方式'),
      },
      {
        error: !validator.isMobilePhone(contact, 'en-AU') && !validator.isEmail(contact),
        message: '请输入有效联系方式',
      },
    ]),
  },
};

export default config;
