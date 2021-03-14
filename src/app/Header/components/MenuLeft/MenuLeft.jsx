import React from 'react';
import Box from '../../../../components/Box';
import Hide from '../../../../components/Hide';
import Flex from '../../../../components/Flex';
import Link from '../../../../components/Link';
import ResponsiveBurgerMenu from './components/ResponsiveBurgerMenu';

const MenuLeft = () => (
  <Flex
    alignItems="center"
    pl={['md', null, 0]}
    flex="1"
    height={['40px', null, '64px']}
  >
    <Hide md lg>
      <ResponsiveBurgerMenu />
    </Hide>
    <Hide xs sm>
      <Flex>
        <Box pr="lg">
          <Link variant="primary" href="/">
            一团袋鼠
          </Link>
        </Box>
        <Box pr="lg">
          <Link variant="primary" href="/become-a-captain">
            成为团长
          </Link>
        </Box>
        <Box>
          <Link variant="primary" href="/faq">
            常见问题
          </Link>
        </Box>
      </Flex>
    </Hide>
  </Flex>
);

export default MenuLeft;
