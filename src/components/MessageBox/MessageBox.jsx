import styled, { css } from 'styled-components';

const MessageBox = styled.div`
  border-radius: 8px;
  padding: 8px 16px;

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
