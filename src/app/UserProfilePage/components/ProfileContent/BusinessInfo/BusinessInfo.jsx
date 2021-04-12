import React, { useState } from 'react';
import Box from '../../../../../components/Box';
import Flex from '../../../../../components/Flex';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Heading from '../../../../../components/Heading';
import config from './config';
import useForm from '../../../../../hooks/useForm';
import updateUser from '../../../../../apis/users/updateUser';
import getFormSubmitting from '../../../../../utils/getFormSubmitting';

const BusinessInfo = ({ response, setResponse }) => {
  const [editing, setEditing] = useState(false);

  const user = response.data;

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    error,
  } = useForm(config(user), (data) => {
    setEditing();

    updateUser(user.id, data)
      .then(setResponse);
    setEditing(false);
  });

  return (
    <Box my="sm">
      <form onSubmit={handleSubmit}>
        <Box pb="md" borderBottom="@1">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="sm">经营信息</Heading>
            {editing ? (
              <Flex justifyContent="flex-end">
                <Box mr="md">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setEditing(false)}
                  >
                    取消
                  </Button>
                </Box>
                <Button
                  type="submit"
                  size="sm"
                  loading={getFormSubmitting(response, { touched, error })}
                >
                  保存
                </Button>
              </Flex>
            ) : (
              <Button
                size="sm"
                type="submit"
                variant="primary"
                onClick={() => setEditing(true)}
              >
                修改信息
              </Button>
            )}
          </Flex>
        </Box>

        {Object.keys(config(user)).map((key) => {
          const errorMessage = config(user)[key].getErrorMessage?.(values[key], values);

          return (
            <Box px="sm">
              <FormItem
                key={key}
                name={key}
                label={config(user)[key].label}
                errorMessage={(error && editing) && errorMessage}
              >
                <Input
                  type={config(user)[key].inputType || 'text'}
                  name={key}
                  onChange={handleChange(key)}
                  readOnly={!editing}
                  value={editing ? values[key] : user[key]}
                  error={error}
                />
              </FormItem>
            </Box>
          );
        })}
      </form>
    </Box>
  );
};

export default BusinessInfo;
