import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../../../components/Button';
import Input from '../../../../../../../../components/Input';

const StyledLinkContent = styled.div`
  margin-top: 60px;
  width: 100%;
`;

const QRCodeContainer = styled.div`
  margin: 0 auto;
  width: 200px;
`;

const QRCode = styled(Image)`
  border-radius: 8px;
`;

const InviteLinkWrapper = styled.div`
  margin-top: 28px;
`;

const Message = styled.div`
  color: #4F4F4F;
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const sampleUrl = 'https://eudora.info?memberId=TEMP_123';

export default function LinkContent() {
  const valueSourceInputRef = useRef();

  const handleCopy = (event) => {
    event.preventDefault();

    const valueSourceInput = valueSourceInputRef.current;

    if (!valueSourceInput) {
      return;
    }

    valueSourceInput.select();
    document.execCommand('copy');
  };

  return (
    <StyledLinkContent>
      <QRCodeContainer>
        <QRCode
          width={200}
          height={200}
          src="/images/temp/qrCode.jpg"
          alt="QR Code"
        />
        <Button variant="naked">
          <Message>
            <Image
              width={16}
              height={16}
              src="/images/icons/reloadIcon.svg"
              alt="刷新"
            />
            &nbsp;
            刷新图片
          </Message>
        </Button>
      </QRCodeContainer>

      <InviteLinkWrapper>
        <Input ref={valueSourceInputRef} readOnly value={sampleUrl} />
      </InviteLinkWrapper>

      <ButtonWrapper>
        <Button onClick={handleCopy} color="success">
          复制链接
        </Button>
      </ButtonWrapper>

    </StyledLinkContent>
  );
}
