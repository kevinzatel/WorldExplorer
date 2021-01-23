import styled from "styled-components";

export const Select = styled.select`
  width: 20%;
  height: 30px;
  color: gray;
  cursor: pointer;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  transition: 300ms;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  }

  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f2f2f2;
  border-radius: 0.5rem;

  option {
    color: grey;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;