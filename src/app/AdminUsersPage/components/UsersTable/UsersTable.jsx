import React from 'react';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Pagination from '../../../../components/Pagination';
import Search from '../../../../components/Search';
import Table from '../../../../components/Table';

export default function UsersTable({
  rows,
  count,
  page,
  pageSize,
}) {
  const data = {
    id: {
      title: 'ID',
      searchable: 'eq',
    },
    mobile: {
      title: 'Mobile',
      searchable: 'like',
    },
    email: {
      title: 'Email',
      searchable: 'like',
    },
    address: {
      title: 'Address',
      searchable: 'like',
    },
    status: {
      title: 'Status',
      searchable: 'like',
      render: (user) => (
        <Box
          px="sm"
          py="xs"
          borderRadius="default"
          display="inline-block"
          fontSize="xs"
          color={{
            ACTIVE: 'white',
          }[user.status]}
          bg={{
            ACTIVE: 'success',
            PENDING_VERIFICATION: 'grey',
          }[user.status]}
        >
          {user.status}
        </Box>
      ),
    },
    action: {
      title: '',
      render: (user) => (
        <Flex justifyContent="space-between">
          {user.status === 'PENDING_VERIFICATION' && (
            <Button variant="success" size="sm">激活账号</Button>
          )}
        </Flex>
      ),
    },
  };

  const searchableData = Object.keys(data).reduce((acc, cur) => {
    const column = data[cur];

    if (!column.searchable) {
      return acc;
    }

    return {
      ...acc,
      [cur]: column,
    };
  }, {});

  return (
    <>
      <Search data={searchableData} />
      <Box fontSize="sm" color="greys.@500" mb="sm">
        {`共计 ${count} 条数据`}
      </Box>
      <Table
        data={data}
        rows={rows}
      />
      <Box mt="md">
        <Pagination page={page} pageSize={pageSize} count={count} />
      </Box>
    </>
  );
}
