import React from 'react';
import Flex from '../../../../components/Flex';
import Icon from '../../../../components/Icon';
import CaptainCard from './components/CaptainCard';

const CaptainList = ({
  captains,
}) => (
  <Flex
    flexDirection="column"
  >
    {captains ? captains.map((c) => (
      <CaptainCard
        key={c.id}
        name={c.name}
        address={c.address}
        description={c.leadingProduct?.shortDescription}
        lastUpdatedAt={c.leadingProduct?.updatedAt}
      />
    )) : (
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Icon variant="naked" name="loading" spin />
      </Flex>
    )}
  </Flex>
);

export default CaptainList;
