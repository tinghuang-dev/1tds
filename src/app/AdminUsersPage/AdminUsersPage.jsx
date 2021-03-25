import { useRouter } from 'next/router';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import listUsers from '../../apis/admin/listUsers';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import withAuth from '../../components/withAuth';
import AdminPage from '../AdminPage';
import ACTION from './ACTION';
import CaptainNow from './components/CaptainNow';
import UserModal from './components/UserModal';
import UsersTable from './components/UsersTable';

function AdminUsersPage() {
  const { query } = useRouter();
  const [response, setResponse] = useState();

  const page = parseFloat(query.page || 0);
  const pageSize = parseFloat(query.pageSize || 10);

  const requestListUsers = useCallback(() => {
    setResponse();

    return listUsers({
      page,
      pageSize,
      where: query.where,
    })
      .then(setResponse)
      .catch(setResponse);
  }, [page, pageSize, query.where]);

  useEffect(() => {
    requestListUsers();
  }, [requestListUsers]);

  const [onAction, setOnAction] = useState();

  return (
    <>
      <Title>用户管理 | Admin</Title>
      <AdminPage>
        {response ? (
          <>
            {response.status === 200 ? (
              <UsersTable
                onAction={setOnAction}
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
      {onAction && (
        <UserModal user={onAction.user} onClose={() => setOnAction()}>
          {{
            [ACTION.CAPTAIN_NOW]: (
              <CaptainNow
                userId={onAction.user.id}
                onDone={() => {
                  setOnAction();
                  requestListUsers();
                }}
              />
            ),
          }[ACTION.CAPTAIN_NOW]}
        </UserModal>
      )}
    </>
  );
}

export default withAuth(AdminUsersPage);
