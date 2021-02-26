import Image from 'next/image';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  height: auto;
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

const Title = styled.div`
  font-family: 'ZCOOL KuaiLe';
  font-size: 36px;
  margin: 0px 200px 50px;
  font-weight: 400;
  text-align: center;
`;

const Content = styled.div`
  padding: 60px 50px;
`;

export default function Modal({
  title,
  onClose,
  children,
}) {
  return (
    <>
      <HideBodyOverflow />
      <Overlay>
        <StyledModal>
          <CloseButton right={50} top={32} type="button" onClick={onClose}>
            <Image
              src="/images/icons/squareCloseIcon.svg"
              alt="关闭"
              height={32}
              width={32}
            />
          </CloseButton>
          <Content>
            {title && <Title>{title}</Title>}
            {children}
          </Content>
        </StyledModal>
      </Overlay>
    </>
  );
}
