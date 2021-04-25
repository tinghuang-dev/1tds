import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  variant, typography, layout, space,
} from 'styled-system';

const Anchor = styled.a.attrs({
  letterSpacing: '4px',
  minWidth: '170px',
  fontSize: '1x',
  py: 'md',
  px: 'lg',
})`
  font-family: 'ZCOOL KuaiLe';
  cursor: pointer;

  ${typography}
  ${layout}
  ${space}
`;

const VariantAnchor = styled(Anchor)(variant({
  variants: {
    text: {
      color: 'inherit',
      bg: 'transparent',
    },
    primary: {
      borderRadius: 'default',
      color: 'white',
      bg: 'primary',
    },
  },
}));

function UserProfileNavLink({
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

UserProfileNavLink.defaultProps = {
  variant: 'text',
};

export default UserProfileNavLink;
