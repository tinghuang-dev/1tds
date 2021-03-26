import React from 'react';
import Flex from '../../../components/Flex';
import SearchBar from './components/SearchBar';
import CaptainCard from './components/CaptainCard';
import CAPTAIN_LIST from './CaptainListData';

const data = CAPTAIN_LIST;

const CaptainList = () => (
  <Flex
    flexDirection="column"
    width={400}
    border="@1"
    borderColor="primary"
  >
    <SearchBar />
    {data.map(({
      id,
      name,
      description,
      address,
      lastUpdate,
      teamSize,
      tags,
    }) => (
      <CaptainCard
        key={id}
        name={name}
        description={description}
        address={address}
        lastUpdate={lastUpdate}
        teamSize={teamSize}
        tags={tags}
      />
    ))}
  </Flex>
);

export default CaptainList;
