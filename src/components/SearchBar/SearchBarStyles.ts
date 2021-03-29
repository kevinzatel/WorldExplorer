import styled from "styled-components";

interface IFormProps {
    barOpened: boolean;
  }
  
  export const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  `;
  
  export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f2f2f2;
    width: ${(props: IFormProps) => (props.barOpened ? "20rem" : "1.5rem")};
    cursor: ${(props: IFormProps) => (props.barOpened ? "auto" : "pointer")};
    padding: 1rem;
    border-radius: 1rem;
    transition: 300ms;
    height: 1rem;
    &:hover {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    }
  `;
  
  export const Input = styled.input`
    font-size: 14px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    margin-left: ${(props: IFormProps) => (props.barOpened ? "1rem" : "0rem")};
    border: none;
    color: grey;
    transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus,
    &:active {
      outline: none;
    }
    &::placeholder {
      color: grey;
    }
  `;
  
  export const Button = styled.button`
    line-height: 1;
    pointer-events: ${(props: IFormProps) => (props.barOpened ? "auto" : "none")};
    cursor: ${(props: IFormProps) => (props.barOpened ? "pointer" : "none")};
    background-color: transparent;
    border: none;
    outline: none;
    color: grey;
  `;
  
  export const SearchIcon = styled.div`
    margin-top: 5px;
    margin-left: 5px;
  `;
  
  export const ErrorMessage = styled.p`
    color: #900c3f;
    margin-top: -10px;
  `;