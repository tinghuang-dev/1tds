import React, { useState } from 'react';
import createCaptains from '../../../../apis/admin/createCaptains';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import useForm from '../../../../hooks/useForm';
import config from './config';

export default function CaptainNow({
  userId,
  onDone,
}) {
  const [response, setResponse] = useState();

  const key = 'name';

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
  } = useForm(config, (data) => {
    setResponse();

    createCaptains(userId, data)
      .then(setResponse)
      .then(onDone);
  });

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
                loading={!response && touched}
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
