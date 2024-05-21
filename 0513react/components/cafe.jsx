import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px;
    background-color: #fff;
  }
`;

const ButtonStyle = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${props => props.primary ? 'darkblue' : 'darkgray'};
  }
`;

const CafeBtn = styled(ButtonStyle)`
  font-weight: bold;
  color: darkorange;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

export function Cafe() {
  return (
    <div>
      <GlobalStyle />
      <ButtonStyle primary="true">Primary Button</ButtonStyle>
      <ButtonStyle>Default Button</ButtonStyle>
      <CafeBtn primary="true">Extended Primary Button</CafeBtn>
    </div>
  );
}