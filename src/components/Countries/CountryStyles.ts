import styled from "styled-components";


export const ListWrapper = styled.div`
box-sizing: border-box;
overflow: hidden;
display: grid;
width: 100%;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
grid-row-gap: 25px;
padding: 10px;
margin-top: 3%;
margin-bottom: 1%;
`;

export const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 300ms;
  width: 80%;
  height: 90%;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.h2`
  color: #0B6206;
  font-weight: 300 bold;
`;

export const Information = styled.section`
  color: black;
  font-weight: 300;
`;

export const Link = styled.p`
  color: black;
  font-weight: 300;
  cursor: pointer;
  border-radius: 6px;
  transition: 300ms;
  padding: 4px;
  &:hover{
    background-color: #f2f2f2;

  }
`;