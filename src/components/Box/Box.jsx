import styled from 'styled-components';
import {
  border, flexbox, space, position, layout, color, typography, system,
} from 'styled-system';

const transform = system({
  transform: true,
});

const Box = styled.div`
  ${transform}
  ${typography}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${space}
  ${position}
`;

export default Box;
