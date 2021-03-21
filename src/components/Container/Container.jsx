import styled from 'styled-components';
import { system } from 'styled-system';

const maxWidth = system({
  maxWidth: true,
});

const Container = styled.div.attrs({
  maxWidth: ['100%', null, '1280px'],
})`
  margin: 0 auto;

  ${maxWidth}
`;

export default Container;
