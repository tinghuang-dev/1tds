import validator from 'validator';
import alertEmpty from '../../../../../../../../../../utils/alertEmpty';

const config = {
  contact: {
    label: '邮箱/手机',
    getErrorMessage: (contact) => {
      if (!contact) {
        return alertEmpty('团员联系方式');
      }

      if (!validator.isMobilePhone(contact, 'en-AU') && !validator.isEmail(contact)) {
        return '请输入有效联系方式';
      }

      return '';
    },
  },
};

export default config;
