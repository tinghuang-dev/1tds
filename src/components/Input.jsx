import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 321px;
  outline: none;
  border: 1px solid #C97A40;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4.5px 16px;
  font-family: 'Microsoft YaHei';
  font-size: 18px;

  border-color: ${(props) => props.error && 'blue'};
`;

export default Input;
