import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../../../../../../../../../../components/Button';

const StyledBar = styled.div`
  padding: 4px 8px 4px 10px;
  background: #E0E0E0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ContactWrapper = styled.div`
  max-width: 90%;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 1px;
  margin-right: 10px;
  word-wrap: break-word;
`;

const CloseButton = styled(Button)`
  display: flex;
  align-items: center;
`;

export default function ContactBar({ onDelete, children }) {
  return (
    <StyledBar>
      <ContactWrapper>
        {children}
      </ContactWrapper>

      <CloseButton variant="naked" onClick={onDelete}>
        <Image
          width={20}
          height={20}
          alt="CircleCloseIcon"
          src="/images/icons/circleCloseIcon.svg"
        />
      </CloseButton>
    </StyledBar>
  );
}
