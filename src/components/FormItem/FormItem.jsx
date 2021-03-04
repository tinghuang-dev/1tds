import styled, { css } from 'styled-components';
import React from 'react';

const StyledFormItem = styled.div`
  margin: 12px 0; 
`;

const Layout = styled.div`
  ${(props) => ({
    inline: css`
      display: flex;
      align-items: center;
    `,
    block: css`
      display: block;
    `,
  }[props.layout || 'inline'])}
`;

const Label = styled.label`
  font-size: 18px;
`;

const LabelWrapper = styled.div`
  width: 100px;
  margin: 4px 0;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const ErrorMessage = styled.div`
  color: #E83D32;
  margin-top: 4px;
`;

const FormItem = ({
  name,
  layout,
  label,
  errorMessage,
  children,
}) => (
  <StyledFormItem>
    <Layout layout={layout}>
      <LabelWrapper>
        <Label htmlFor={name}>{label}</Label>
      </LabelWrapper>
      <InputWrapper>
        {children}
      </InputWrapper>
    </Layout>
    <Layout layout={layout}>
      <LabelWrapper />
      <div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Layout>
  </StyledFormItem>
);

export default FormItem;
