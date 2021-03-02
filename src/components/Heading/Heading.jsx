import styled, { css } from 'styled-components';

const Heading = styled.div`
  font-family: 'ZCOOL KuaiLe';
  letter-spacing: 8px;
  
  ${(props) => ({
    sm: css`
      font-size: 24px;
    `,
    md: css`
      font-size: 36px;
    `,
    lg: css`
      font-size: 48px;
    `,
    xl: css`
      font-size: 56px;
    `,
  }[props.size || 'lg'])}
`;
export default Heading;
