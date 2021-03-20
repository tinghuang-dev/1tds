import React from 'react';
import Box from '../../components/Box';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Link from '../../components/Link';
import useGetActiveLinkProps from '../../hooks/useGetActiveLinkProps';

export default function AdminUsersPage({
  children,
}) {
  const getActiveLinkProps = useGetActiveLinkProps();

  return (
    <Container>
      <Flex mt="1x">
        <Box borderRight="@1" borderColor="border" pr="1x">
          <Box>
            <Link
              {...getActiveLinkProps('/admin/users')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              用户管理
            </Link>
          </Box>
          <Box mt="md">
            <Link
              {...getActiveLinkProps('/admin/products')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              团购管理
            </Link>
          </Box>
          <Box mt="md">
            <Link
              {...getActiveLinkProps('/admin/orders')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              订单管理
            </Link>
          </Box>
        </Box>
        <Box flex="1" pl="1x">
          {children}
        </Box>
      </Flex>
    </Container>
  );
}
