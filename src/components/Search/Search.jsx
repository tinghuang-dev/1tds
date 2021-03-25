import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import Box from '../Box';

const Select = styled.select`
  border: 0;
  outline: 0;
  font-size: 14px;
`;

export default function UsersTable({
  data,
}) {
  const { pathname, query } = useRouter();

  const [state, setState] = useState({
    key: Object.keys(data)[0],
    value: '',
  });

  useEffect(() => {
    const result = /(.*)\[OP\..*\](.*)/.exec(query.where);

    if (!result) {
      return;
    }

    setState({
      key: result[1],
      value: result[2],
    });
  }, [query.where]);

  const onSearch = () => {
    if (!state.value) {
      return;
    }

    Router.replace({
      pathname,
      query: {
        ...query,
        page: undefined,
        pageSize: undefined,
        where: `${state.key}[OP.${data[state.key].searchable}]${state.value}`,
      },
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <Flex mb="sm" justifyContent="flex-end">
        <Flex>
          <Input
            prefix={(
              <Select
                value={state.key}
                onChange={(event) => setState({
                  key: event.target.value,
                  value: '',
                })}
              >
                {Object.keys(data).map((key) => data[key].searchable && (
                  <option key={key} value={key}>{data[key].title}</option>
                ))}
              </Select>
            )}
            value={state.value}
            onChange={(event) => setState((prevState) => ({
              ...prevState,
              value: event.target.value,
            }))}
            size="sm"
          />
          <Box ml="md">
            <Button size="sm">搜索</Button>
          </Box>
        </Flex>
      </Flex>
    </form>
  );
}
