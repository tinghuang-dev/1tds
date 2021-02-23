import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EB9050;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-family: ZCOOL KuaiLe;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 2px;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  ${(props) => ({
    sm: css`
      padding: 10px 16px;
      font-size: 14px;
    `,
    default: css`
      padding: 12px 16px;
      font-size: 16px;
    `,
    lg: css`
      padding: 16px 20px;
      font-size: 18px;
    `,
  }[props.size || 'default'])}
`;

export default Button;
