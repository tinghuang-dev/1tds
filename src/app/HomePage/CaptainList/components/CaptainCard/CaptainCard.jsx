import React from 'react';
import Box from '../../../../../components/Box';
import Icon from '../../../../../components/Icon';
import Flex from '../../../../../components/Flex';
import TruncateText from '../../../../../components/TruncateText';
import Tag from '../Tag';

const CaptainCard = ({
  name,
  description,
  address,
  lastUpdate,
  teamSize,
  tags,
}) => (
  <Flex
    borderBottom="@1"
    borderColor="border"
    flexDirection="column"
    px="lg"
    py="md"
  >
    <Flex pb="xs" alignItems="center" justifyContent="space-between">
      <Box
        letterSpacing={8}
        fontSize="2x"
        fontFamily="ZCOOL KuaiLe"
        color="darkPrimary"
      >
        {name}
      </Box>
      <Icon variant="link" name="shareSquare" size="2x" />
    </Flex>
    <Flex py="xs">
      {tags && tags.map(({ id, tag }) => (
        <Tag key={id}>{tag}</Tag>
      ))}
    </Flex>
    <Box py="xs" letterSpacing={1} color="greys.@700">
      <TruncateText>
        {description}
      </TruncateText>
    </Box>
    <Box
      color="greys.@400"
      py="xs"
    >
      {address}
    </Box>
    <Flex pt="xs" justifyContent="space-between">
      <Box color="greys.@500">
        {`${lastUpdate}前已上新｜已有${teamSize}人成团`}
      </Box>
      <Flex
        color="link"
        fontFamily="ZCOOL KuaiLe"
        alignItems="center"
      >
        查看
        <Box ml="sm">
          <Icon
            ml="sm"
            size="lg"
            variant="link"
            name="caretRight"
          />
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

export default CaptainCard;
