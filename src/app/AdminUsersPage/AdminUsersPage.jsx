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
import ActiveUser from './components/ActiveUser';
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

  const [action, setAction] = useState();

  return (
    <>
      <Title>用户管理 | Admin</Title>
      <AdminPage>
        {response ? (
          <>
            {response.status === 200 ? (
              <UsersTable
                onAction={setAction}
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
      {action && (
        <UserModal user={action.user} onClose={() => setAction()}>
          {{
            [ACTION.CAPTAIN_NOW]: (
              <CaptainNow
                userId={action.user.id}
                onDone={() => {
                  setAction();
                  requestListUsers();
                }}
              />
            ),
            [ACTION.ACTIVE_USER]: (
              <ActiveUser
                userId={action.user.id}
                onDone={() => {
                  setAction();
                  requestListUsers();
                }}
              />
            ),
          }[action.type]}
        </UserModal>
      )}
    </>
  );
}

export default withAuth(AdminUsersPage);
