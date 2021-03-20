import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import getUsers from '../../apis/admin/getUsers';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Icon from '../../components/Icon';
import AdminPage from '../AdminPage';
import UsersTable from './components/UsersTable';

export default function AdminUsersPage() {
  const { query } = useRouter();
  const [response, setResponse] = useState();

  const page = parseFloat(query.page || 0);
  const pageSize = parseFloat(query.pageSize || 10);

  useEffect(() => {
    getUsers({
      page,
      pageSize,
      where: query.where,
    })
      .then(setResponse)
      .catch(setResponse);
  }, [page, pageSize, query]);

  return (
    <>
      <Title>用户管理 | Admin</Title>
      <AdminPage>
        {response ? (
          <>
            {response.status === 200 ? (
              <UsersTable
                rows={response.data.rows}
                count={response.data.count}
                page={page}
                pageSize={pageSize}
              />
            ) : (
              <Box>出错了，请稍后重试……</Box>
            )}
          </>
        ) : (
          <Icon variant="naked" name="loading" spin />
        )}
      </AdminPage>
    </>
  );
}
