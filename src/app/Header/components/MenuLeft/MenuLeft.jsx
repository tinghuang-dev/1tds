import React from 'react';
import { useRouter } from 'next/router';
import Box from '../../../../components/Box';
import Hide from '../../../../components/Hide';
import Flex from '../../../../components/Flex';
import Link from '../../../../components/Link';
import ResponsiveBurgerMenu from './components/ResponsiveBurgerMenu';
import getActiveLinkProps from '../../utils/getActiveLinkProps';

const MenuLeft = () => {
  const { pathname } = useRouter();

  const getLinkProps = getActiveLinkProps(pathname);

  return (
    <Flex
      alignItems="center"
      pl={['md', null, 0]}
      flex="1"
      height="50px"
    >
      <Hide md lg>
        <ResponsiveBurgerMenu />
      </Hide>
      <Hide xs sm>
        <Flex>
          <Box pr="lg">
            <Link
              {...getLinkProps('/')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              一团袋鼠
            </Link>
          </Box>
          <Box pr="lg">
            <Link
              {...getLinkProps('/become-a-captain')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              成为团长
            </Link>
          </Box>
          <Box>
            <Link
              {...getLinkProps('/faq')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              常见问题
            </Link>
          </Box>
        </Flex>
      </Hide>
    </Flex>
  );
};

export default MenuLeft;
