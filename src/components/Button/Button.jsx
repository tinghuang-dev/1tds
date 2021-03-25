import React from 'react';
import styled from 'styled-components';
import { variant, border } from 'styled-system';
import Icon from '../Icon';

const StyledButton = styled.button.attrs({
  border: '@2',
  borderColor: 'transparent',
})`
  font-family: 'ZCOOL KuaiLe';
  outline: none;
  border: none;
  cursor: pointer;
  word-break: keep-all;

  :hover {
    filter: grayscale(30%);
  }

  :disabled {
    filter: grayscale(50%);
    cursor: no-drop;
  }

  ${border}
`;

const SizeButton = styled(StyledButton)(variant({
  prop: 'size',
  variants: {
    sm: {
      height: ['30px', null, '35px'],
      py: 0,
      px: 'sm',
      fontSize: 'sm',
      letterSpacing: '1px',
      minWidth: ['45px', null, '100px'],
    },
    md: {
      height: '45px',
      py: 0,
      px: 'md',
      fontSize: 'lg',
      letterSpacing: '2px',
      minWidth: '150px',
    },
    lg: {
      height: '60px',
      py: 0,
      px: 'lg',
      fontSize: '1x',
      letterSpacing: '4px',
      minWidth: '170px',
    },
  },
}));

const VariantButton = styled(SizeButton)(variant({
  prop: 'variant',
  variants: {
    primary: {
      bg: 'primary',
      color: 'white',
      borderRadius: 'default',
    },
    primaryOutlined: {
      bg: 'white',
      color: 'primary',
      borderColor: 'primary',
      borderRadius: 'default',
    },
    secondary: {
      bg: 'secondary',
      color: 'primary',
      borderRadius: 'default',
    },
    success: {
      bg: 'success',
      color: 'white',
      borderRadius: 'default',
    },
    naked: {
      height: 'initial',
      p: 0,
      color: 'inherit',
      letterSpacing: 'initial',
      bg: 'transparent',
      minWidth: 'initial',
    },
    link: {
      height: 'initial',
      p: 0,
      color: 'link',
      letterSpacing: 'initial',
      bg: 'transparent',
      minWidth: 'initial',
    },
  },
}));

function Button({
  loading,
  children,
  ...props
}) {
  return (
    <VariantButton
      {...loading && { disabled: true }} // eslint-disable-line react/jsx-props-no-spreading
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      {loading ? (<Icon spin variant="naked" name="loading" />) : children}
    </VariantButton>
  );
}

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
};

export default Button;
