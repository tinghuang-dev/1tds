import React from 'react';
import Box from '../../../../../../../../components/Box';
import Link from '../../../../../../../../components/Link';

const SlideMenu = ({ onClose }) => (
  <Box
    width="100px"
    py="md"
    bg="white"
    fontSize="sm"
    position="absolute"
    zIndex="popup"
    borderRadius="default"
    border="@1"
    borderColor="border"
    onClick={onClose}
  >
    <Box px="md">
      <Link variant="primary" href="/become-a-captain">
        成为团长
      </Link>
    </Box>
    <Box px="md" mt="md">
      <Link variant="primary" href="/faq">
        常见问题
      </Link>
    </Box>
  </Box>
);

export default SlideMenu;
