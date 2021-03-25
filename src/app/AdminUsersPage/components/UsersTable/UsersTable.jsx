import React from 'react';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Pagination from '../../../../components/Pagination';
import Search from '../../../../components/Search';
import Table from '../../../../components/Table';
import Icon from '../../../../components/Icon';
import ACTION from '../../ACTION';
import useCaptainByUserId from './hooks/useCaptainByUserId';

const SEARCHABLE = {
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
  },
};

export default function UsersTable({
  rows,
  count,
  page,
  pageSize,
  onAction,
}) {
  const captainByUserId = useCaptainByUserId(rows);

  const data = {
    id: {
      title: 'ID',
      width: '5%',
    },
    status: {
      title: 'Status',
      width: '15%',
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
    contact: {
      title: 'Contact',
      width: '20%',
      render: (user) => (
        <Box fontSize="sm">
          <Box mb="xs" pb="xs" borderBottom="@1" borderColor="border">{user.mobile}</Box>
          <Box>{user.email}</Box>
        </Box>
      ),
    },
    address: {
      width: '30%',
      title: 'Address',
      render: (user) => (
        <Box fontSize="sm">
          {user.address}
        </Box>
      ),
    },
    action: {
      title: '',
      render: (user) => (
        <Flex m={-2}>
          {user.status === 'PENDING_VERIFICATION' && (
            <Box p="2">
              <Button
                variant="primaryOutlined"
                size="sm"
                onClick={() => onAction({ user, type: ACTION.ACTIVE_USER })}
              >
                激活账号
              </Button>
            </Box>
          )}
          {captainByUserId ? (!captainByUserId[user.id] && (
            <Box p="2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onAction({ user, type: ACTION.CAPTAIN_NOW })}
              >
                开团
              </Button>
            </Box>
          )) : (
            <Flex alignItems="center" color="greys.@500" p="2">
              <Icon variant="naked" name="loading" spin />
            </Flex>
          )}
        </Flex>
      ),
    },
  };

  return (
    <>
      <Search data={SEARCHABLE} />
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
