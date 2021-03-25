import getMessage from '../../../../utils/getMessage';
import alertEmpty from '../../../../utils/alertEmpty';

const config = {
  name: {
    label: '名称',
    getErrorMessage: (name) => getMessage([
      {
        error: !name,
        message: alertEmpty(config.name.label),
      },
    ]),
  },
};

export default config;
