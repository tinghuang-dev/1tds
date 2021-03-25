import React from 'react';
import createCaptains from '../../../../apis/admin/createCaptains';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import useApi from '../../../../hooks/useApi';
import useForm from '../../../../hooks/useForm';
import config from './config';

export default function CaptainNow({
  userId,
  onDone,
}) {
  const key = 'name';

  const {
    requesting,
    sendRequest,
  } = useApi((data) => createCaptains(userId, data), {
    onSuccess: onDone,
  });

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, sendRequest);

  const errorMessage = config[key].getErrorMessage?.(values[key], values);
  const error = touched && !!errorMessage;

  return (
    <Box p="md" bg="greys.@100">
      <Box
        pb="sm"
        mb="sm"
        borderBottom="@1"
        borderColor="border"
        color="greys.@600"
        fontSize="lg"
      >
        开团
      </Box>
      <form onSubmit={handleSubmit}>
        <FormItem
          name={key}
          layout="block"
          label={config[key].label}
          errorMessage={error && errorMessage}
        >
          <Flex>
            <Input
              id={key}
              onChange={handleChange(key)}
              value={values[key]}
              error={error}
            />
            <Box ml="md">
              <Button
                loading={requesting}
                type="submit"
              >
                确认
              </Button>
            </Box>
          </Flex>
        </FormItem>
      </form>
    </Box>
  );
}
