import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  font-family: 'ZCOOL KuaiLe';
  color: #6097E6;
  cursor: pointer;
`;

function Link({
  className,
  children,
  variant,
  ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextLink {...props} passHref>
      <Anchor className={className} variant={variant}>
        {children}
      </Anchor>
    </NextLink>
  );
}

export default Link;
