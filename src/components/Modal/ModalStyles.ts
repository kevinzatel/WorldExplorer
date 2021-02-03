import styled from "styled-components";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
`;

export const Header = styled.div`
  text-align: right;
`; 

export const Icon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: auto;
  &:active {
    outline: none;
  }
`;

export const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 10px;
  border-radius: 6px;
  width: 80%;
  margin-top: 5%;

`;