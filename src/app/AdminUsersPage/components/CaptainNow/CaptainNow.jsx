import React, { useState } from 'react';
import createCaptains from '../../../../apis/admin/createCaptains';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import useForm from '../../../../hooks/useForm';
import config from './config';
import getFormSubmitting from '../../../../utils/getFormSubmitting';

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
    error,
  } = useForm(config, (data) => {
    setResponse();

    createCaptains(userId, data)
      .then(setResponse)
      .then(onDone);
  });

  const errorMessage = config[key].getErrorMessage?.(values[key], values);

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
              onChange={(event) => handleChange(key, event.target.value)}
              value={values[key]}
              error={error}
            />
            <Box ml="md">
              <Button
                loading={getFormSubmitting(response, { touched, error })}
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
