import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '../Box';

const skeleton = keyframes`
  0% {
    background-position: -200px 0px;
  }
  100% {
      background-position: calc(200px + 100%) 0px;
  }
`;

const StyledSkeleton = styled(Box)`
  display: inline-block;
  color: transparent;
  background-color: rgb(238, 238, 238);
  background-image: linear-gradient(90deg,rgb(238, 238, 238),rgb(245, 245, 245),rgb(238, 238, 238));
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: 1.2s ease-in-out 0s infinite normal none running ${skeleton};
`;

const Skeleton = (props) => (
  <StyledSkeleton
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  >
    加载中...
  </StyledSkeleton>
);

export default Skeleton;
