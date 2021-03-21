import React from 'react';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import Flex from '../Flex';

const Container = styled(Flex).attrs({
  border: '@2',
  borderColor: 'transparent',
  borderRadius: 'default',
  width: '100%',
  alignItems: 'center',
  overflow: 'hidden',
})``;

const SizeContainer = styled(Container)(styledVariant({
  prop: 'size',
  variants: {
    sm: {
      px: 'xs',
      height: '35px',
    },
    md: {
      px: 'sm',
      height: '45px',
    },
    lg: {
      px: 'sm',
      height: '60px',
    },
  },
}));

const VariantContainer = styled(SizeContainer)(
  {
    '&:focus-within': {
      borderColor: '#6097E6',
    },
  },
  styledVariant({
    prop: 'variant',
    variants: {
      default: {
        borderColor: '#c97a40',
        bg: 'white',
      },
      naked: '',
      error: {
        borderColor: 'error',
        bg: 'white',
      },
      readOnly: {
        borderColor: 'transparent',
        bg: 'secondary',
        '&:focus-within': {
          borderColor: 'transparent',
        },
      },
    },
  }),
);

const InputContainer = ({
  error, readOnly, variant, ...otherProps
}) => {
  const getVariant = () => {
    if (readOnly) {
      return 'readOnly';
    }

    if (error) {
      return 'error';
    }

    return variant;
  };

  return (
    <VariantContainer
      variant={getVariant()}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
};

const Item = styled(Flex)(
  {
    alignItems: 'center',
  },
  styledVariant({
    prop: 'size',
    variants: {
      sm: { px: 'xs' },
      md: { px: 'sm' },
      lg: { px: 'sm' },
    },
  }),
);

const CustomInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: transparent;

  &::placeholder {
    color: black;
  };
`;

const SizeInput = styled(CustomInput)(styledVariant({
  prop: 'size',
  variants: {
    sm: { fontSize: 'sm' },
    md: { fontSize: 'md' },
    lg: { fontSize: 'lg' },
  },
}));

const Input = React.forwardRef(({
  size,
  variant,
  error,
  prefix,
  suffix,
  readOnly,
  ...props
}, ref) => (
  <InputContainer
    size={size}
    variant={variant}
    error={error}
    readOnly={readOnly}
  >
    {prefix && (<Item size={size}>{prefix}</Item>)}
    <Item flex="1" size={size}>
      <SizeInput
        {...props} /* eslint-disable-line react/jsx-props-no-spreading */
        ref={ref}
        readOnly={readOnly}
        size={size}
      />
    </Item>
    {suffix && (<Item size={size}>{suffix}</Item>)}
  </InputContainer>
));

Input.defaultProps = {
  size: 'md',
  variant: 'default',
};

export default Input;
