import styled from 'styled-components';
import { variant } from 'styled-system';

const StyledHeading = styled.div`
  font-family: 'ZCOOL KuaiLe';
  letter-spacing: 8px;
`;

const Heading = styled(StyledHeading)(variant({
  prop: 'size',
  variants: {
    sm: {
      fontSize: '1x',
    },
    md: {
      fontSize: '2x',
    },
    lg: {
      fontSize: '3x',
    },
    '1x': {
      fontSize: '4x',
    },
  },
}));

Heading.defaultProps = {
  size: 'lg',
};

export default Heading;
