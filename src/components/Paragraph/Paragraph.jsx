import styled from 'styled-components';
import { typography } from 'styled-system';

const Paragraph = styled.p`
  margin: 0;

  ${typography};
`;

Paragraph.defaultProps = {
  lineHeight: 'loose',
};

export default Paragraph;
