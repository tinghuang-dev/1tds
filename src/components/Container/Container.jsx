import styled from 'styled-components';

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export default Container;
