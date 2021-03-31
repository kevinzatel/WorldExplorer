import styled from "styled-components";

interface IProps {
  height: number
}

export const Nav = styled.div`
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props: IProps) => props.height}px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;
  overflow: hidden;
`;

export const Logo = styled.img`
  src: ${({ src }) => src};
  height: ${(props: IProps) => props.height - 10}px;
  padding: 15px;
`;

export const Title = styled.span`
  font-size: 20px;
  color: #515151;
  margin-bottom: 2px;
  margin-left: -10px;;
`;

export const LogoAndTitle = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`

export const RightItems = styled.div`
  margin-left: auto;
  margin-top: 3px;
  padding: 15px;
`;