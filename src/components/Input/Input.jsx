import React from 'react';
import styled, { css } from 'styled-components';

const gap = (props) => ({
  sm: css`
    padding: 0 4px;
  `,
  default: css`
    padding: 0 6px;
  `,
  lg: css`
    padding: 0 8px;
  `,
}[props.size || 'default']);

const Container = styled.div`
  border-radius: 8px;
  border: 2px solid transparent;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:focus-within {
    border-color: #6097e5;
  }

  ${gap}

  ${(props) => ({
    sm: css`
      height: 35px;
    `,
    default: css`
      height: 45px;
    `,
    lg: css`
      height: 60px;
    `,
  }[props.size || 'default'])}

  ${(props) => ({
    default: css`
      border-color: #c97a40;
      background-color: #ffffff;
    `,
    naked: css``,
  }[props.variant || 'default'])}

  ${(props) => props.error && css`
    border-color: #e83d32;
  `}

  ${(props) => props.readOnly && css`
    border-color: transparent;
    background-color: #FCEAC6;
    &:focus-within {
    border-color: transparent;
  }
  `}
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  ${gap}
`;

const InputContainer = styled(Item)`
  flex: 1;
`;

const CustomInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: transparent;

  ${(props) => ({
    sm: css`
      font-size: 14px;
    `,
    default: css`
      font-size: 18px;
    `,
    lg: css`
      font-size: 20px;
    `,
  }[props.size || 'default'])}

  &::placeholder {
    color: black;
  };
`;

const Input = React.forwardRef(({
  size,
  variant,
  error,
  prefix,
  suffix,
  readOnly,
  ...props
}, ref) => (
  <Container
    size={size}
    variant={variant}
    error={error}
    readOnly={readOnly}
  >
    {prefix && (<Item size={size}>{prefix}</Item>)}
    <InputContainer size={size}>
      <CustomInput
        {...props} /* eslint-disable-line react/jsx-props-no-spreading */
        ref={ref}
        readOnly={readOnly}
        size={size}
      />
    </InputContainer>
    {suffix && (<Item size={size}>{suffix}</Item>)}
  </Container>
));

export default Input;
