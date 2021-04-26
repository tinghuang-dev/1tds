import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Heading from '../../../../components/Heading';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Products from './components/Products/Products';
import productsData from './components/Products/productsData';

const InvisibleScrollBar = styled(Box)`
  ::-webkit-scrollbar {
    display: none;
}
`;

const StoreDetailModal = ({ setShowStoreDetail }) => {
  const keys = Object.keys(productsData);

  const initialState = keys.reduce((acc, key) => ({
    ...acc,
    [key]: 0,
  }), {});

  const [numberOfProducts, setNumberOfProducts] = useState(initialState);

  const totalProducts = Object.values(numberOfProducts).reduce((total, num) => total + num);

  const payment = (
    productsData.新鲜小龙虾.price * numberOfProducts.新鲜小龙虾
  ) + (
    productsData.香辣螃蟹.price * numberOfProducts.香辣螃蟹
  ) + (
    productsData.塔州新鲜鲍鱼.price * numberOfProducts.塔州新鲜鲍鱼
  );

  return (
    <InvisibleScrollBar
      height="60vh"
      width="320px"
      overflowY="auto"
      position="relative"
      bg="white"
      borderRadius="default"
      border="@1"
      borderColor="grey"
      p="lg"
    >
      <Box
        position="absolute"
        top={['lg', null, 'md']}
        right={['lg', null, 'md']}
      >
        <Button type="button" variant="naked" onClick={() => setShowStoreDetail(false)}>
          <Hide xs sm>
            <Icon name="close" size="lg" />
          </Hide>
          <Hide md lg>
            <Icon name="return" size="lg" />
          </Hide>
        </Button>
      </Box>
      <Flex justifyContent="center">
        <Heading size="md">
          海鲜大王
        </Heading>
      </Flex>
      <Flex justifyContent="center" py="sm">
        <Flex>
          还有
          <Box mx="sm" color="primary">
            8
          </Box>
          天截止
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" mt="md">
        <Box borderRight="@1" pr="sm">
          <Button variant="naked">
            最热
          </Button>
        </Box>
        <Box pl="sm">
          <Button variant="naked">
            评论最高
          </Button>
        </Box>
      </Flex>
      <Products
        numberOfProducts={numberOfProducts}
        setNumberOfProducts={setNumberOfProducts}
      />
      <Flex justifyContent="space-between">
        <Box>
          {totalProducts}
          {' '}
          件物品
        </Box>
        <Box color="primary">
          $
          {payment}
        </Box>
      </Flex>
      <Flex mt="lg" justifyContent="center">
        <Box mr="lg">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setNumberOfProducts({
              新鲜小龙虾: 0,
              香辣螃蟹: 0,
              塔州新鲜鲍鱼: 0,
            })}
          >
            清空
          </Button>
        </Box>
        <Button size="sm" variant="primary">
          参团
        </Button>
      </Flex>
    </InvisibleScrollBar>
  );
};

export default StoreDetailModal;
