import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const Anchor = styled.a`
  font-family: 'ZCOOL KuaiLe';
  cursor: pointer;
`;

const VariantAnchor = styled(Anchor)(variant({
  variants: {
    link: {
      color: 'link',
    },
    primary: {
      color: 'primary',
    },
  },
}));

function Link({
  children,
  ...props
}) {
  return (

    <NextLink
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      passHref
    >
      <VariantAnchor
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      >
        {children}
      </VariantAnchor>
    </NextLink>
  );
}

Link.defaultProps = {
  variant: 'link',
};

export default Link;
