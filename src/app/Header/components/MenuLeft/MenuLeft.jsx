import React from 'react';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Hide from '../../../../components/Hide';
import Link from '../../../../components/Link';
import useGetActiveLinkProps from '../../../../hooks/useGetActiveLinkProps';
import ResponsiveBurgerMenu from './components/ResponsiveBurgerMenu';

const MenuLeft = () => {
  const getActiveLinkProps = useGetActiveLinkProps();

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
              {...getActiveLinkProps('/')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              一团袋鼠
            </Link>
          </Box>
          <Box pr="lg">
            <Link
              {...getActiveLinkProps('/become-a-captain')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              成为团长
            </Link>
          </Box>
          <Box>
            <Link
              {...getActiveLinkProps('/faq')} /* eslint-disable-line react/jsx-props-no-spreading */
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
