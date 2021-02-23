import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 321px;
  outline: none;
  border: 1px solid #C97A40;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 16px;
  font-size: 18px;

  &:focus {
    border-color: #6097E5;
  }

  border-color: ${(props) => props.error && '#E83D32;'};
`;

export default Input;
