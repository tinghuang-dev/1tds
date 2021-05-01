import React from 'react';
import Image from 'next/image';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import Flex from '../../../../../../components/Flex';
import Icon from '../../../../../../components/Icon';
import TruncateText from '../../../../../../components/TruncateText';

const Products = ({
  numberOfProducts,
  setNumberOfProducts,
  product,
}) => {
  const handleMinus = (id) => {
    setNumberOfProducts((preNumber) => ({
      ...preNumber,
      [id]: preNumber[id] - 1,
    }));
  };

  const handlePlus = (id) => {
    setNumberOfProducts((preNumber) => ({
      ...preNumber,
      [id]: preNumber[id] + 1,
    }));
  };

  return (
    <Box mt="md" mx="sm">
      {product ? product.map((p) => {
        const {
          price, shortDescription, name, id,
        } = p;

        const totalPrice = numberOfProducts[id] * price;

        console.log(totalPrice);

        return (
          <Box key={id}>
            <Flex justifyContent="center">
              <Box
                mr="lg"
                height="100px"
                width="100px"
                bg="grey"
                borderRadius="default"
              >
                <Image
                  alt={name}
                  src={`/images/products/${id}.jpg`}
                  width={100}
                  height={100}
                />
              </Box>
              <Box height="100px" width="100px" bg="grey" borderRadius="default" />
            </Flex>
            <Box mt="sm">
              {name}
            </Box>
            <Flex justifyContent="space-between" mt="sm">
              <Box color="primary">
                $
                {' '}
                {price}
              </Box>
              <Flex alignItems="center">
                <Icon name="minus" color="black" onClick={() => handleMinus(id)} />
                <Box mx="sm">
                  {numberOfProducts[id]}
                </Box>
                <Icon name="plus" color="black" onClick={() => handlePlus(id)} />
              </Flex>
            </Flex>
            <Box mt="sm" color="greys.@500">
              <TruncateText>
                {shortDescription}
              </TruncateText>
            </Box>
            <Flex justifyContent="space-between" mt="sm" mb="lg">
              <Box>
                <Button variant="link" size="sm">
                  了解详情
                </Button>
              </Box>
              <Flex color="greys.@300">
                已有
                <Box mx="sm" color="primary">
                  {0}
                </Box>
                人选择
              </Flex>
            </Flex>
          </Box>
        );
      }) : (
        <Flex
          height="40vh"
          alignItems="center"
          justifyContent="center"
        >
          <Icon variant="naked" name="loading" spin />
        </Flex>
      ) }
    </Box>
  );
};

export default Products;
