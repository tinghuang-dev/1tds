import React from 'react';
import config from './config';
import useForm from '../../../../../../../../../../hooks/useForm';
import Input from '../../../../../../../../../../components/Input';
import Button from '../../../../../../../../../../components/Button';
import FormItem from '../../../../../../../../../../components/FormItem';
import Box from '../../../../../../../../../../components/Box';
import Flex from '../../../../../../../../../../components/Flex';

const KEY = 'contact';

export default function Form({
  contacts,
  onSubmit,
}) {
  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, (value) => {
    onSubmit(value[KEY]);
  });

  const isExistingContact = !!contacts.find((contact) => contact === values.contact);

  const errorMessage = config[KEY].getErrorMessage?.(values[KEY], values)
    || (isExistingContact && '请勿输入重复信息');
  const error = touched && !!errorMessage;

  return (
    <Box mt="lg">
      <form onSubmit={handleSubmit}>
        <FormItem
          key={KEY}
          name={KEY}
          layout="block"
          label={config[KEY].label}
          errorMessage={error && errorMessage}
        >
          <Flex>
            <Input
              type={config[KEY].inputType || 'text'}
              name={KEY}
              onChange={handleChange(KEY)}
              value={values[KEY]}
              error={error}
            />
            <Box ml="md">
              <Button color="success">确认</Button>
            </Box>
          </Flex>
        </FormItem>
      </form>
    </Box>
  );
}
