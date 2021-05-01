import { differenceInDays } from 'date-fns';
import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import Flex from '../../../../../../components/Flex';
import Heading from '../../../../../../components/Heading';
import Icon from '../../../../../../components/Icon';
import Skeleton from '../../../../../../components/Skeleton';
import TruncateText from '../../../../../../components/TruncateText';
import Tag from '../Tag';

const sells = '222';
const tags = [
  { id: '1', tag: '热卖' },
  { id: '2', tag: '上新' },
  { id: '3', tag: '推荐' },
];

const CaptainCard = ({
  name,
  captainDescription,
  address,
  lastUpdatedAt,
  product,
  setShowStoreDetail,
  setProducts,
}) => {
  const handleClick = () => {
    setShowStoreDetail(true);
    setProducts({ name, product });
  };

  return (
    <Flex
      borderBottom="@1"
      borderColor="border"
      flexDirection="column"
      px="lg"
      py="md"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box color="darkPrimary">
          <Heading size="sm">
            {name}
          </Heading>
        </Box>
        <Icon variant="link" name="share" size="lg" />
      </Flex>
      <Flex pt="sm">
        {tags && tags.map(({ id, tag }) => (
          <Tag key={id}>{tag}</Tag>
        ))}
      </Flex>
      <Box pt="sm" fontSize="xs" color="greys.@400">
        <TruncateText>
          {address}
        </TruncateText>
      </Box>
      <Box pt="sm" fontSize="sm" color="greys.@700">
        {captainDescription ? (
          <TruncateText>
            {captainDescription}
          </TruncateText>
        ) : (
          <Skeleton width="100%" />
        )}
      </Box>
      <Flex pt="xs" mt="sm" justifyContent="space-between" alignItems="center">
        <Box color="greys.@500" fontSize="xs">
          {lastUpdatedAt ? (
            <span>
              {`${differenceInDays(
                new Date(),
                new Date(lastUpdatedAt),
              )}天前已上新`}
            </span>
          ) : (
            <Skeleton />
          )}
          <span>{' | '}</span>
          <span>{`已有${sells}人成团`}</span>
        </Box>
        <Flex alignItems="center" onClick={() => handleClick()}>
          <Button size="sm" variant="link">
            查看
          </Button>
          <Box ml="sm">
            <Icon size="lg" variant="naked" name="caretRight" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaptainCard;
