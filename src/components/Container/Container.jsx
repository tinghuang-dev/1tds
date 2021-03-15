import styled from 'styled-components';
import { system } from 'styled-system';

const width = system({
  width: true,
});

const Container = styled.div.attrs({
  width: ['100%', null, '1280px'],
})`
  margin: 0 auto;

  ${width}
`;

export default Container;
