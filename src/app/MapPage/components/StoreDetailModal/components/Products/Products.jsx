import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import Flex from '../../../../../../components/Flex';
import Icon from '../../../../../../components/Icon';
import TruncateText from '../../../../../../components/TruncateText';
import productsData from './productsData';

const Products = ({
  numberOfProducts,
  setNumberOfProducts,
}) => {
  const handleMinus = (key) => {
    setNumberOfProducts((preNumber) => ({
      ...preNumber,
      [key]: preNumber[key] - 1,
    }));
  };

  const handlePlus = (key) => {
    setNumberOfProducts((preNumber) => ({
      ...preNumber,
      [key]: preNumber[key] + 1,
    }));
  };

  return (
    <Box mt="md" mx="sm">
      {Object.keys(productsData).map((key) => {
        const {
          picture, price, description, people,
        } = productsData[key];

        return (
          <Box key={key}>
            <Flex justifyContent="center">
              <Box
                mr="lg"
                height="100px"
                width="100px"
                bg="grey"
                borderRadius="default"
              >
                {picture}
              </Box>
              <Box height="100px" width="100px" bg="grey" borderRadius="default" />
            </Flex>
            <Box mt="sm">
              {key}
            </Box>
            <Flex justifyContent="space-between" mt="sm">
              <Box color="primary">
                $
                {' '}
                {price}
                /份
              </Box>
              <Flex alignItems="center">
                <Icon name="minus" color="black" onClick={() => handleMinus(key)} />
                <Box mx="sm">
                  {numberOfProducts[key]}
                </Box>
                <Icon name="plus" color="black" onClick={() => handlePlus(key)} />
              </Flex>
            </Flex>
            <Box mt="sm">
              <TruncateText>
                {description}
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
                  {people}
                </Box>
                人选择
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Products;
