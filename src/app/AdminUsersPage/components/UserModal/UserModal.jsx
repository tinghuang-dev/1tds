import React from 'react';
import Box from '../../../../components/Box';
import Modal from '../../../../components/Modal';

export default function UserModal({
  user,
  onClose,
  children,
}) {
  return (
    <Modal title="用户管理" onClose={onClose}>
      <Box pb="sm" mb="sm" borderBottom="@1" borderColor="border">
        <Box color="greys.@500" fontSize="sm">ID</Box>
        <Box>{user.id}</Box>
      </Box>
      <Box pb="sm" mb="sm" borderBottom="@1" borderColor="border">
        <Box color="greys.@500" fontSize="sm">Mobile</Box>
        <Box>{user.mobile}</Box>
      </Box>
      <Box pb="sm" mb="sm" borderBottom="@1" borderColor="border">
        <Box color="greys.@500" fontSize="sm">Email</Box>
        <Box>{user.email}</Box>
      </Box>
      <Box pb="sm" mb="sm" borderBottom="@1" borderColor="border">
        <Box color="greys.@500" fontSize="sm">Address</Box>
        <Box>{user.address}</Box>
      </Box>
      <Box>
        <Box color="greys.@500" fontSize="sm">Status</Box>
        <Box>{user.status}</Box>
      </Box>
      {children && (<Box mt="lg">{children}</Box>)}
    </Modal>
  );
}
