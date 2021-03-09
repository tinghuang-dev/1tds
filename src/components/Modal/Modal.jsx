import Image from 'next/image';
import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Heading from '../Heading';

const HideBodyOverflow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 0;
  top: 0;
`;

const StyledModal = styled.div`
  background-color: white;
  border-radius: 8px;
  position: relative;
  height: auto;

  ${(props) => ({
    sm: css`
      width: 400px;
      padding: 40px;
    `,
    default: css`
      width: 550px;
      padding: 60px 50px;
    `,
    lg: css`
      width:750px;
      padding: 75px;
    `,
  }[props.size || 'default'])}

  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 50px;
  top: 30px;
  padding: 0;
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const Title = styled(Heading)`
  margin-bottom: 36px;
  text-align: center;
`;

export default function Modal({
  title,
  onClose,
  children,
  size,
}) {
  return (
    <>
      <HideBodyOverflow />
      <Overlay>
        <StyledModal
          size={size}
        >
          <CloseButton right={50} top={32} type="button" onClick={onClose}>
            <Image
              src="/images/icons/squareCloseIcon.svg"
              alt="关闭"
              height={32}
              width={32}
            />
          </CloseButton>
          <div>
            {title && <Title size="md">{title}</Title>}
            {children}
          </div>
        </StyledModal>
      </Overlay>
    </>
  );
}
