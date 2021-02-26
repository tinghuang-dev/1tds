import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: ZCOOL KuaiLe;
  outline: none;
  border: none;
  cursor: pointer;

  ${(props) => ({
    sm: css`
      height: 32px;
      padding: 0 12px;
      font-size: 12px;
      letter-spacing: 1px;
    `,
    md: css`
      height: 36px;
      padding: 0 16px;
      font-size: 18px;
      letter-spacing: 2px;
    `,
    lg: css`
      height: 60px;
      padding: 0 24px;
      font-size: 20px;
      letter-spacing: 4px;
    `,
  }[props.size || 'md'])}

  ${(props) => ({
    primary: css`
      background: #EB9050;
      color: #ffffff;
    `,
    secondary: css`
      background: #FCEAC6;
      color: #C97A40;
    `,
    success: css`
      background: #97A73F;
      color: #ffffff;
    `,
  }[props.color || 'primary'])}



${(props) => ({
    button: css`
      text-align: center;
      letter-spacing: 2px;
      border-radius: 8px;
    `,
    naked: css`
      padding: 0;
      background: transparent;
      color: #6097e6;
    `,
  }[props.variant || 'button'])}
`;

export default Button;
