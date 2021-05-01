import React from 'react';
import styled from 'styled-components';
import Flex from '../../../../components/Flex';
import Icon from '../../../../components/Icon';
import CaptainCard from './components/CaptainCard';

const InvisibleScrollBar = styled(Flex)`
  ::-webkit-scrollbar {
    display: none;
}
`;

const CaptainList = ({
  captains,
  setShowStoreDetail,
  setProducts,
}) => (
  <InvisibleScrollBar
    flexDirection="column"
    height="80vh"
    overflowY="auto"
  >
    {captains ? captains.map((c) => (
      <CaptainCard
        key={c.id}
        name={c.name}
        address={c.address}
        captainDescription={c.description}
        lastUpdatedAt={c.updatedAt}
        product={c.leadingProduct}
        setShowStoreDetail={setShowStoreDetail}
        setProducts={setProducts}
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
  </InvisibleScrollBar>
);

export default CaptainList;
