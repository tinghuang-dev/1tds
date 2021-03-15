import styled from 'styled-components';
import { system } from 'styled-system';

const config = {
  properties: ['backgroundColor', 'bg'],
  cssProperty: 'background-color',
  scale: 'colors',
};

const backgroundColor = system({
  bg: config,
  backgroundColor: config,
});

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;

  ${backgroundColor}
`;

export default Overlay;
