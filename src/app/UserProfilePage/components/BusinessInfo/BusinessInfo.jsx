import React, { useState } from 'react';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import FormItem from '../../../../components/FormItem';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import config from './config';
import useForm from '../../../../hooks/useForm';
import updateUser from '../../../../apis/users/updateUser';
import getFormSubmitting from '../../../../utils/getFormSubmitting';
import AddressInput from '../../../../components/AddressInput';

const BusinessInfo = ({ userInfo, setUserInfo }) => {
  const [editing, setEditing] = useState(false);

  const {
    handleChange,
    values,
    touched,
    handleSubmit,
    error,
  } = useForm(config(userInfo), (data) => {
    setEditing();

    updateUser(userInfo.id, data)
      .then(setUserInfo);
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
                  loading={getFormSubmitting(userInfo, { touched, error })}
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

        {Object.keys(config(userInfo)).map((key) => {
          const errorMessage = config(userInfo)[key].getErrorMessage?.(values[key], values);

          return (
            <Box px="sm">
              <FormItem
                key={key}
                name={key}
                label={config(userInfo)[key].label}
                errorMessage={(error && editing) && errorMessage}
              >
                {key === 'address' ? (
                  <AddressInput
                    readOnly={!editing}
                    initialValue={editing ? values[key] : userInfo[key]}
                    layout="flex"
                    size={['sm', null, 'md']}
                    formOnchange={(value) => handleChange('address', value)}
                    formOnclick={(prediction) => handleChange('address', prediction.description)}
                  />
                ) : (
                  <Input
                    type={config(userInfo)[key].inputType || 'text'}
                    name={key}
                    onChange={(event) => handleChange(key, event.target.value)}
                    readOnly={!editing}
                    value={editing ? values[key] : userInfo[key]}
                    error={error}
                  />
                )}
              </FormItem>
            </Box>
          );
        })}
      </form>
    </Box>
  );
};

export default BusinessInfo;
