import React from 'react';
import Flex from '../../../components/Flex';
import Icon from '../../../components/Icon';
import SearchBar from './components/SearchBar';
import CaptainCard from './components/CaptainCard';

const CaptainList = ({
  captains,
}) => (
  <Flex
    flexDirection="column"
    width={400}
    borderRight="@1"
    borderLeft="@1"
    borderColor="border"
  >
    <SearchBar />
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
        borderBottom="@1"
        borderColor="border"
      >
        <Icon variant="naked" name="loading" spin />
      </Flex>
    )}
  </Flex>
);

export default CaptainList;
