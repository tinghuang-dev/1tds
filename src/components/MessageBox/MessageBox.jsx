import styled, { css } from 'styled-components';
import Box from '../Box';

const MessageBox = styled(Box).attrs({
  borderRadius: 'default',
  p: 'sm',
  px: 'md',
  lineHeight: 'loose',
})`
  ${(props) => ({
    success: css`
      color: white;
      background-color: #97A73F;
    `,
    error: css`
      color: white;
      background-color: #EB9050;
    `,
    info: css`
      background: #f0f0f0;
    `,
  }[props.variant || 'success'])};
`;

export default MessageBox;
