import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon';

const StyledButton = styled.button`
  font-family: 'ZCOOL KuaiLe';
  outline: none;
  border: none;
  cursor: pointer;
  word-break: keep-all;

  ${(props) => ({
    sm: css`
      height: 35px;
      padding: 0 12px;
      font-size: 14px;
      letter-spacing: 1px;
      min-width: 80px;
    `,
    md: css`
      height: 45px;
      padding: 0 16px;
      font-size: 18px;
      letter-spacing: 2px;
      min-width: 150px;
    `,
    lg: css`
      height: 60px;
      padding: 0 24px;
      font-size: 20px;
      letter-spacing: 4px;
      min-width: 170px;
    `,
  }[props.size || 'md'])}


  letter-spacing: 2px;
  border-radius: 8px;

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
    naked: css`
      height: 0;
      padding: 0;
      color: inherit;
      letter-spacing: initial;
      background: transparent;
      min-width: initial;
    `,
    link: css`
      height: 0;
      padding: 0;
      letter-spacing: initial;
      background: transparent;
      color: #6097e6;
      min-width: initial;
    `,
  }[props.variant || 'primary'])}

  :hover {
    filter: grayscale(30%);
  }

  :disabled {
    filter: grayscale(50%);
    cursor: no-drop;
  }
`;

function Button({
  loading,
  children,
  ...props
}) {
  return (
    <StyledButton
      {...loading && { disabled: true }} // eslint-disable-line react/jsx-props-no-spreading
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      {loading ? (<Icon spin variant="naked" name="loading" />) : children}
    </StyledButton>
  );
}

export default Button;
